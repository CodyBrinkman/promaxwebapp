<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex md11 class="bread-size">Pharmacies</v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Search' })">search</v-icon></v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Home' })">home</v-icon></v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/oL9m6rQ.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">CVS Health</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/4KIG0Ow.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Rite Aid</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/u0NK9dI.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Kroger Pharmacy</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/LQDiqvL.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Walmart Pharmacy</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/oYz4LvB.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Walgreens Boots Alliance</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/1USNyBe.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Safeway Pharmacy</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/wldcZGT.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">KMart Pharmacy</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/zglafmH.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Costco Pharmacies</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://imgur.com/nSzOvDh.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Publix Pharmacies</h4>
            <br />
            <div class="desc-position">
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Ratings:</span>
                3.8
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
                <v-icon color="orange" size="20">star_half</v-icon>
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Contact:</span> 502-555-5555
              </h4>
              <h4 class="custom-font font-weight-light">
                <span class="custom-font-color font-weight-bold">Address:</span> 123 Main St, 9th Fl Louisville, KY 40202
              </h4>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex class="spacer-width">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.icon-position {
  margin-top: 3%;
  margin-left: 3%;
  margin-bottom: 3%;
}
.card-size {
  margin-right: 8%;
  margin-bottom: 8%;
  border-radius:10px;
}
.ratings-size {
  height: 2%;
  width: 2%;
}
.col-margin {
  margin-top: -4%;
  margin-right: -1%;
  margin-left: 1%;
}
.desc-position {
  margin-top: -5%;
  margin-bottom: -3%;
}
.custom-font {
  font-family: "Poppins", sans-serif;
  font-size: 13px;
}
.custom-font-color {
  color: rgb(2, 154, 212);
}
.card-text {
  margin-top: -5%;
  margin-left: -2%;
}
.v-card-profile {
  border-radius: 5%;
  width: 94%;
  height: 71%;
}
.spacer-width {
  margin-bottom: 75%;
}
.bread-size {
  font-size: 22px;
  font-weight: bold;
}
</style>>

