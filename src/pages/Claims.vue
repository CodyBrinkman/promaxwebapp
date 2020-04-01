<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex md11 class="bread-size">Claims Request</v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Search' })">search</v-icon></v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Home' })">home</v-icon></v-flex>
    </v-layout>
    <v-tabs>
      <v-tab class="table-header-style font-weight-bold font-roboto">Pending Request</v-tab>
      <v-tab class="table-header-style font-weight-bold font-roboto">Approved</v-tab>
      <v-tab class="table-header-style font-weight-bold font-roboto">In Progress</v-tab>
      <v-tab class="table-header-style font-weight-bold font-roboto">Rejected</v-tab>
      <v-tab class="table-header-style tab-style"></v-tab>
      <v-tab class="table-header-style tab-style"></v-tab>
      <v-tab class="table-header-style tab-style"></v-tab>
      <v-spacer class="table-header-style"></v-spacer>
      <v-tab-item>
        <v-card flat class="table-header-style card-style">
          <v-layout class="font-weight-bold font-roboto">
            <v-flex md5>Patient Details</v-flex>
            <v-flex md2>Network</v-flex>
            <v-flex md3>Total Amount</v-flex>
            <v-flex md3>Patient Amount</v-flex>
            <v-flex md3>Billed To Insurance</v-flex>
          </v-layout>
        </v-card>
        <v-card class="card-style rounded" v-for="(statement,index) in statements" v-bind:key="statement">
          <v-card-text v-if="statement.CurrentPhase == 'Processing'">
            <v-layout>
              <v-flex
                md5
                class="font-weight-bold font-roboto patient-size"
              >{{statement.PatientName}}</v-flex>
              <v-flex md2></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3 class="date-size">{{statement.Date}}</v-flex>
            </v-layout>
            <v-layout class="font-poppins">
              <v-flex md5>
                <span class="custom-font-color font-weight-bold">ID:</span>
                {{statement.Id}}
                <br />
                <span class="custom-font-color font-weight-bold">Provider:</span>
                {{statement.Provider}}
                <br />
                <span class="custom-font-color font-weight-bold">Description:</span>
                {{statement.Description}}
              </v-flex>
              <v-flex md2 class="network font-weight-bold">{{statement.NetworkInOut}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >
              <label>${{diag.TotalCharge}}</label>
              <v-text-field class="t-width"  flat v-model="totalBilledAmount[index]"></v-text-field>
              </v-flex>
              
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >
              <label>${{diag.PatientAmount}}</label>
              <v-text-field class="t-width" flat v-model="patientAmount[index]"></v-text-field></v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >
              <label>${{diag.BilledToInsurance}}</label>
              <v-text-field class="t-width" flat v-model="billedtoInsurance[index]"></v-text-field></v-flex>
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
              <v-flex md3>
                <v-btn
                  class="info btn-size"
                  v-on:click="sendBacktoPayer(statement.Id, statement.DiagnosisID, index)"
                  @click.stop="dialog = true"
                >Process</v-btn>
                <v-dialog v-model="dialog" max-width="350">
                <v-card text-center>
                  <v-card-title class="headline">Claim Processed</v-card-title>
                  <v-card-text>Remittance advice successfully sent to Aspira</v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="info" text @click="dialog = false">Done</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
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
        <v-card class="card-style rounded" v-for="statement in statements" v-bind:key="statement">
          <v-card-text v-if="statement.CurrentPhase == 'Approved'">
            <v-layout>
              <v-flex
                md5
                class="font-weight-bold font-roboto patient-size"
              >{{statement.PatientName}}</v-flex>
              <v-flex md2></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3 class="date-size">{{statement.Date}}</v-flex>
            </v-layout>
            <v-layout class="font-poppins">
              <v-flex md5>
                <span class="custom-font-color font-weight-bold">ID:</span>
                {{statement.Id}}
                <br />
                <span class="custom-font-color font-weight-bold">Provider:</span>
                {{statement.Provider}}
                <br />
                <span class="custom-font-color font-weight-bold">Description:</span>
                {{statement.Description}}
              </v-flex>
              <v-flex md2 class="network font-weight-bold">{{statement.NetworkInOut}}</v-flex>
              <v-flex md3>{{statement.CurrentPhase}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.TotalCharge}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.PatientAmount}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.BilledToInsurance}}</v-flex>
            </v-layout>
            <br />
            <hr class="hr-class" />
            <br />
            <v-layout>
              <v-flex md5>
                <span class="custom-font-color font-weight-bold">Attachment:</span> InboundAdvance.PDF
                <v-icon color="blue">save_alt</v-icon>
              </v-flex>
              <v-flex md4></v-flex>
              <v-flex md4></v-flex>
              <v-flex md4></v-flex>
              <v-flex md2>
                <v-icon color="green">check_circle_outline</v-icon> <span style="color:green">Approved</span>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
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
        <v-card class="card-style rounded" v-for="statement in statements" v-bind:key="statement">
          <v-card-text v-if="statement.CurrentPhase == 'Processing'">
            <v-layout>
              <v-flex
                md5
                class="font-weight-bold font-roboto patient-size"
              >{{statement.PatientName}}</v-flex>
              <v-flex md2></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3 class="date-size">{{statement.Date}}</v-flex>
            </v-layout>
            <v-layout class="font-poppins">
              <v-flex md5>
                <span class="custom-font-color font-weight-bold">ID:</span>
                {{statement.Id}}
                <br />
                <span class="custom-font-color font-weight-bold">Provider:</span>
                {{statement.Provider}}
                <br />
                <span class="custom-font-color font-weight-bold">Description:</span>
                {{statement.Description}}
              </v-flex>
              <v-flex md2 class="network font-weight-bold">{{statement.NetworkInOut}}</v-flex>
              <v-flex md3>{{statement.CurrentPhase}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.TotalCharge}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.PatientAmount}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.BilledToInsurance}}</v-flex>
            </v-layout>
            <br />
            <hr class="hr-class" />
            <br />
            <v-layout>
              <v-flex md5>
                <span class="custom-font-color font-weight-bold">Attachment:</span> InboundAdvance.PDF
                <v-icon color="blue">save_alt</v-icon>
              </v-flex>
              <v-flex md4></v-flex>
              <v-flex md4></v-flex>
              <v-flex md4></v-flex>
              <v-flex md2>
                <v-icon color="orange">history</v-icon> <span style="color:orange">Processing</span>
              </v-flex>
            </v-layout>
            <br />
            <v-stepper alt-labels>
              <v-stepper-header>
                <v-stepper-step step complete color="blue">
                  Provider
                  <small>Claim Generated</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step :complete="(statement.CurrentPhase == 'Processing') || (statement.CurrentPhase == 'Approved')" color="blue">
                  Aspira
                  <small>Claim Sent To TPA</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step :complete="(statement.CurrentPhase == 'Approved')" color="blue">
                  TPA
                  <small>Cost Negotiation</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step :complete="(statement.CurrentPhase == 'Approved')" color="blue">
                  Aspira
                  <small>Paid</small>
                </v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step :complete="(statement.CurrentPhase == 'Approved')" color="blue">
                  Patient
                  <small>Claim Ready</small>
                </v-stepper-step>
              </v-stepper-header>
            </v-stepper>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <v-tab-item>
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
        <v-card class="card-style rounded" v-for="statement in statements" v-bind:key="statement">
          <v-card-text v-if="statement.CurrentPhase == 'Rejected'">
            <v-layout>
              <v-flex
                md5
                class="font-weight-bold font-roboto patient-size"
              >{{statement.PatientName}}</v-flex>
              <v-flex md2></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3></v-flex>
              <v-flex md3 class="date-size">{{statement.Date}}</v-flex>
            </v-layout>
            <v-layout class="font-poppins">
              <v-flex md5>
                <span class="custom-font-color font-weight-bold">ID:</span>
                {{statement.Id}}
                <br />
                <span class="custom-font-color font-weight-bold">Provider:</span>
                {{statement.Provider}}
                <br />
                <span class="custom-font-color font-weight-bold">Description:</span>
                {{statement.Description}}
              </v-flex>
              <v-flex md2 class="network font-weight-bold">{{statement.NetworkInOut}}</v-flex>
              <v-flex md3>{{statement.CurrentPhase}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.TotalCharge}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.PatientAmount}}</v-flex>
              <v-flex
                md3
                v-for="diag in statement.diagnosisArr"
                v-bind:key="diag"
              >${{diag.BilledToInsurance}}</v-flex>
            </v-layout>
            <br />
            <hr class="hr-class" />
            <br />
            <v-layout>
              <v-flex md7>
                <span class="custom-font-color font-weight-bold">Reason:</span> Reason: Lorem ipsum dolor sit amet, consectetu.
              </v-flex>
              <v-flex md4></v-flex>
              <v-flex md4></v-flex>
              <v-flex md2>
                <v-icon color="red">highlight_off</v-icon> <span style="color:red">Rejected</span>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
    <v-layout>
      <v-flex class="spacer-width">
      </v-flex>
    </v-layout>
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
      tabs: 3,
      totalBilledAmount: [],
      patientAmount: [],
      billedtoInsurance: [],
      status: [],
      flag: false,
      dialog: false
    };
  },
  mounted() {
    axios.get("http://132.145.202.167:3003/statements").then(response => {
      this.statements = response.data;
    });
  },
  methods: {
    sendToThirdParty(statementID) {
      axios
        .patch("http://132.145.202.167:3003/statements/" + statementID, {
          currentPhase: "Processing"
        })
        .then(response => {
          console.log(
            "Sent " + statementID + " for third party processing successfully."
          );
          window.location.reload();
        });
    },
    sendBacktoPayer (sID, dID, index) {
      console.log(this.totalBilledAmount[index])
      axios.all([
        axios.patch('http://132.145.202.167:3003/statements/' + sID, {
          currentPhase: "Approved"
        })
        .then(
          response => {
          console.log(
            "Sent " + this.totalBilledAmount + this.patientAmount + this.billedtoInsurance + " for third party processing successfully."
          );
          }),
        axios.patch('http://132.145.202.167:3003/diagnosis/' + dID, {
          totalCharge: this.totalBilledAmount[index],
          patientAmount: this.patientAmount[index],
          billedToInsurance: this.billedtoInsurance[index]
        })
      ])
        .then(axios.spread((statementRes, diagnosisRes) => {
          window.location.reload()
        }))
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
  color: rgb(2, 154, 212);
}
.network {
  color: #d99700;
}
.btn-size {
  width: 90%;
}
.t-width {
  width: 40%;
}
.spacer-width {
  margin-bottom: 75%;
}
.bread-size {
  font-size: 22px;
  font-weight: bold;
}
</style>