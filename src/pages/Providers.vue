<template>
  <v-container fluid grid-list-xl>
    <v-layout>
      <v-flex md11 class="bread-size">Providers</v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Search' })">search</v-icon></v-flex>
      <v-flex md1><v-icon color="blue" @click="$router.push({ name: 'Home' })">home</v-icon></v-flex>
    </v-layout>
    <v-layout row>
      <v-flex md4>
        <v-card class="card-size">
          <v-avatar size="60" class="icon-position">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Plimpton Stanley G MD</h4>
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
            <img src="https://tinyfac.es/data/avatars/475605E3-69C5-4D2B-8727-61B7BB8C4699-500w.jpeg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Bakos Odett MD</h4>
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
            <img src="https://randomuser.me/api/portraits/women/44.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Kobe Lauwers MD</h4>
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
            <img src="https://randomuser.me/api/portraits/men/46.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Michael Chapman MD</h4>
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
            <img src="https://randomuser.me/api/portraits/women/47.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Justine Marie MD</h4>
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
            <img src="https://randomuser.me/api/portraits/women/49.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Syrine Leger MD</h4>
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
            <img src="https://randomuser.me/api/portraits/men/97.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Wenke Sauer MD</h4>
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
            <img src="https://tinyfac.es/data/avatars/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Joshua Stevens MD</h4>
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
            <img src="https://faces.design/faces/w/w13.png" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Cristina Parghel MD</h4>
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
            <img src="https://randomuser.me/api/portraits/women/79.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Julia Hanu MD</h4>
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
            <img src="https://pbs.twimg.com/profile_images/969073897189523456/rSuiu_Hr.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">David Sims G MD</h4>
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
            <img src="https://randomuser.me/api/portraits/women/95.jpg" />
          </v-avatar>
          <v-card-text class="text-left card-text">
            <h4 class="font-weight-bold">Kelly Bennett MD</h4>
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
.bread-size {
  font-size: 22px;
  font-weight: bold;
}
</style>>

