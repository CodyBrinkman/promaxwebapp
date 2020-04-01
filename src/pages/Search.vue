<!--
  Issues:
  * Heading center
  * Search bar - Outlined and Curved
 -->
<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex md11 class="bread-size">Search</v-flex>
      <v-flex md1>
        <v-icon color="blue" @click="$router.push({ name: 'Search' })">search</v-icon>
      </v-flex>
      <v-flex md1>
        <v-icon color="blue" @click="$router.push({ name: 'Home' })">home</v-icon>
      </v-flex>
    </v-layout>

    <v-layout row>
      <v-flex md9>
        <v-text-field
          class="toolbar-position"
          placeholder="Enter the Claim ID"
          v-model="statementID"
          solo
        ></v-text-field>
      </v-flex>
      <v-flex md2>
        <v-btn class="info btn-size" v-on:click="search(statementID)">Search</v-btn>
      </v-flex>
      <v-flex md2>
        <v-btn class="info btn-size" v-on:click="history(statementID)">History</v-btn>
      </v-flex>
    </v-layout>
    <div v-show="searchFlag">
    <v-card flat class="table-header-style card-style">
      <v-layout class="font-weight-bold font-roboto">
        <v-flex md5>Patient Details</v-flex>
        <v-flex md2>Network</v-flex>
        <v-flex md3>Current Phase</v-flex>
        <v-flex md3>Total Amount</v-flex>
        <v-flex md3>Patient Amount</v-flex>
        <v-flex md3>Billed To Insurance</v-flex>
      </v-layout>
    </v-card>
      <v-card class="card-style rounded">
        <v-card-text>
          <v-layout>
            <v-flex md5 class="font-weight-bold font-roboto patient-size">{{patientName}}</v-flex>
            <v-flex md2></v-flex>
            <v-flex md3></v-flex>
            <v-flex md3></v-flex>
            <v-flex md3></v-flex>
            <v-flex md3 class="date-size">{{date}}</v-flex>
          </v-layout>
          <v-layout class="font-poppins">
            <v-flex md5>
              <span class="custom-font-color font-weight-bold">ID:</span>
              {{statementID}}
              <br />
              <span class="custom-font-color font-weight-bold">Provider:</span>
              {{provider}}
              <br />
              <span class="custom-font-color font-weight-bold">Description:</span>
              {{description}}
            </v-flex>
            <v-flex md2 class="network font-weight-bold">{{network}}</v-flex>
            <v-flex md3>{{phase}}</v-flex>
            <v-flex
              md3
            >${{totalAmount}}</v-flex>
            <v-flex
              md3
            >${{patientAmount}}</v-flex>
            <v-flex
              md3
            >${{billedToInsurance}}</v-flex>
          </v-layout>
          <br />
          <hr class="hr-class" />
          <br />
          <v-layout>
            <v-flex md5>
              <span class="custom-font-color font-weight-bold">Attachment:</span> InboundAdvance.PDF
              <v-icon color="blue">save_alt</v-icon>
            </v-flex>
            <v-flex md2></v-flex>
            <v-flex md3></v-flex>
            <v-flex md3></v-flex>
            <v-flex md3></v-flex>
          </v-layout>
          <br />
            <v-stepper alt-labels>
              <v-stepper-header>
                <v-stepper-step step complete color="blue">
                  Provider
                  <small>Claim Generated</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step :complete="(phase == 'Processing') || (phase == 'Approved')" color="blue">
                  Aspira
                  <small>Claim Sent To TPA</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step :complete="(phase == 'Approved')" color="blue">
                  TPA
                  <small>Cost Negotiation</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step :complete="(phase == 'Approved')" color="blue">
                  Aspira
                  <small>Paid</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step :complete="(phase == 'Approved')" color="blue">
                  Patient
                  <small>Claim Ready</small>
                </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
        </v-card-text>
      </v-card>
    </div>
    <div v-show="historyFlag">
      <v-card class="card-style rounded" v-for="(transaction) in transactions" v-bind:key="transaction">
        <v-card-text>
          <v-layout>
            <v-flex md5 class="font-weight-bold font-roboto patient-size">{{transaction.Value.PatientName}}</v-flex>
            <v-flex md2></v-flex>
            <v-flex md3></v-flex>
            <v-flex md3></v-flex>
            <v-flex md3></v-flex>
            <v-flex md3></v-flex>
          </v-layout>
          <v-layout class="font-poppins">
            <v-flex md12 >
              <span class="custom-font-color font-weight-bold">Transaction ID:</span>
              {{transaction.TxId}} 
              <br />
              <span class="custom-font-color font-weight-bold">Time Stamp:</span>
              {{transaction.Timestamp}} 
              <br />
              <span class="custom-font-color font-weight-bold">Network:</span>
              {{transaction.Value.NetworkInOut}} 
              <br />
              <span class="custom-font-color font-weight-bold">Phase:</span>
              {{transaction.Value.CurrentPhase}} 
              <br />
              <span class="custom-font-color font-weight-bold">Provider:</span>
              {{transaction.Value.Provider}} </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </div>
    <v-flex class="spacer-width"></v-flex>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      tab: null,
      statements: [],
      statementID: null,
      patientName: null,
      provider: null,
      description: null,
      network: null,
      phase: null,
      totalAmount: null,
      patientAmount: null,
      billedToInsurance: null,
      attachment: null,
      date: null,
      tabs: 3,
      searchFlag: false,
      historyFlag: false,
      transactions: []
    };
  },
  methods: {
    search(statementID) {
      axios
        .get("http://132.145.202.167:3003/statements/detail/" + statementID)
        .then(response => {
          console.log(statementID);
          this.statements = response.data;
          console.log(this.statements);
          console.log(this.statements.PatientName);
          this.patientName = this.statements.PatientName;
          this.statementID = this.statements.Id;
          this.provider = this.statements.Provider;
          this.description = this.statements.Description;
          this.network = this.statements.NetworkInOut;
          this.phase = this.statements.CurrentPhase;
          this.totalAmount = this.statements.DiagnosisID[0].TotalCharge;
          this.patientAmount = this.statements.DiagnosisID[0].PatientAmount;
          this.billedToInsurance = this.statements.DiagnosisID[0].BilledToInsurance;
          this.attachment = this.statements.AttachementLink;
          this.date = this.statements.Date;
          this.searchFlag = true;
          this.historyFlag = false;
        });
    },
    history(statementID) {
      axios
        .get("http://132.145.202.167:3003/statements/history/" + statementID)
        .then(response => {
          this.transactions = response.data;
          console.log(this.transactions[0].TxId);
          this.searchFlag = false;
          this.historyFlag = true;
        });
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/css?family=Roboto");
.card-style {
  margin-top: 3%;
  margin-left: 3%;
  margin-right: 3%;
}
.font-roboto {
  font-family: "Roboto", sans-serif;
}
.table-header-style {
  background-color: rgba(228, 228, 228);
}
.tab-style {
  width: 20%;
}
.rounded {
  border-radius: 2%;
}
.patient-size {
  font-size: 17px;
}
.date-size {
  font-size: 11px;
  font-family: "Poppins", sans-serif;
}
.hr-class {
  opacity: 0.2;
}
.font-poppins {
  font-family: "Poppins", sans-serif;
  font-size: 13px;
}
.custom-font-color {
  color: rgb(2, 154, 212);;
}
.network {
  color: #d99700;
}
.btn-size {
  margin-top: 15%;
  width: 60%;
}
.spacer-width {
  margin-bottom: 75%;
}
.bread-size {
  font-size: 22px;
  font-weight: bold;
}
.icon-position {
  margin-top: 8%;
  margin-left: 35%;
}
.ratings-size {
  height: 2%;
  width: 2%;
}
.col-margin {
  margin-top: 0%;
  margin-right: -7%;
  margin-left: 5%;
}
.desc-position {
  margin-top: -5%;
  margin-bottom: -3%;
  font-size: 75%;
}
.custom-font {
  font-family: "Poppins", sans-serif;
}
.custom-font-color {
  color: rgb(2, 154, 212);
}
.card-text {
  margin-top: -5%;
}
.v-card-profile {
  border-radius: 5%;
  width: 75%;
  height: 71%;
}
.toolbar-position {
  margin-left: 5%;
  margin-top: 2%;
  border-radius: 25px;
  width: 88%;
}
.spacer-width {
  margin-bottom: 75%;
}
.bread-size {
  font-size: 22px;
  font-weight: bold;
}
</style>
