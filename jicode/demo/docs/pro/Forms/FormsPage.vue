<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Forms</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/forms/basic/?utm_source=DemoApp&utm_medium=MDBVuePro"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="demo-section">
        <h4>Form elements with animated background</h4>
        <section>
          <mdb-container class="text-center grey-text">
            <h4 class="h4 pt-2">
              Find your <span class="text-primary">connection</span>
            </h4>
            <hr class="p-2 mx-5" />

            <mdb-input bg label="Name" />
            <mdb-autocomplete bg label="Destination" :data="destination"/>
            <mdb-date-picker bg label="Date" />
            <mdb-time-picker bg label="Time of arrival" />

            <mdb-btn class="px-5" block color="primary">Search</mdb-btn>
            <hr class="p-2 mt-5 mx-5" />

            <div>
              <mdb-icon class="mx-3" icon="subway" />
              <mdb-icon class="mx-3" icon="bus" />
              <mdb-icon class="mx-3" icon="tram" />
              <mdb-icon class="mx-3" icon="car" />
              <mdb-icon class="mx-3" icon="motorcycle" />
              <mdb-icon class="mx-3" icon="shuttle-van" />
              <mdb-icon class="mx-3" icon="plane" />
            </div>
          </mdb-container>
        </section>
      </section>
      <section class="demo-section">
        <h4 class="my-5">Form elegant</h4>
        <section>
          <mdb-row>
            <mdb-col md="5">
              <mdb-card>
                <mdb-card-body class="mx-4">
                  <div class="text-center">
                    <h3 class="dark-grey-text mb-5">
                      <strong>Sign in</strong>
                    </h3>
                  </div>
                  <mdb-input label="Your email" type="email" />
                  <mdb-input
                    label="Your password"
                    type="password"
                    containerClass="mb-0"
                  />
                  <p
                    class="font-small blue-text d-flex justify-content-end pb-3"
                  >
                    Forgot
                    <a href="#" class="blue-text ml-1">Password?</a>
                  </p>
                  <div class="text-center mb-3">
                    <mdb-btn
                      type="button"
                      gradient="blue"
                      rounded
                      class="btn-block z-depth-1a"
                      >Sign in</mdb-btn
                    >
                  </div>
                  <p
                    class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"
                  >
                    or Sign in with:
                  </p>
                  <div class="row my-3 d-flex justify-content-center">
                    <mdb-btn
                      type="button"
                      color="white"
                      rounded
                      class="mr-md-3 z-depth-1a"
                    >
                      <mdb-icon
                        fab
                        icon="facebook-f"
                        class="blue-text text-center"
                      />
                    </mdb-btn>
                    <mdb-btn
                      type="button"
                      color="white"
                      rounded
                      class="mr-md-3 z-depth-1a"
                    >
                      <mdb-icon fab icon="twitter" class="blue-text" />
                    </mdb-btn>
                    <mdb-btn
                      type="button"
                      color="white"
                      rounded
                      class="z-depth-1a"
                    >
                      <mdb-icon fab icon="google-plus-g" class="blue-text" />
                    </mdb-btn>
                  </div>
                </mdb-card-body>
                <mdb-modal-footer class="mx-5 pt-3 mb-1">
                  <p class="font-small grey-text d-flex justify-content-end">
                    Not a member?
                    <a href="#" class="blue-text ml-1">Sign Up</a>
                  </p>
                </mdb-modal-footer>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </section>
      </section>
      <section class="demo-section">
        <h4>Form with icons</h4>
        <section>
          <mdb-card>
            <mdb-card-header class="pt-4 amy-crisp-gradient">
              <mdb-card-title><strong>Reservation</strong></mdb-card-title>
            </mdb-card-header>
            <mdb-card-body>
              <mdb-row>
                <mdb-col>
                  <mdb-input label="name" icon="user" />
                </mdb-col>
                <mdb-col>
                  <mdb-select
                    multiple
                    v-model="selectOptions"
                    label="meal"
                    icon="check-square"
                  />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-date-picker label="date" icon="calendar" />
                </mdb-col>
                <mdb-col>
                  <mdb-time-picker label="time" icon="clock" />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-input
                    :min="2"
                    :max="10"
                    icon="user-friends"
                    type="number"
                    label="guests"
                  />
                </mdb-col>
                <mdb-col>
                  <mdb-autocomplete
                    icon="heart"
                    clearClass="fa-lg"
                    :data="food"
                    label="Food preferences"
                  />
                </mdb-col>
              </mdb-row>
              <mdb-row>
                <mdb-col>
                  <mdb-input
                    type="textarea"
                    label="special requests"
                    icon="pen"
                    :rows="2"
                  />
                </mdb-col>
              </mdb-row>
            </mdb-card-body>
            <mdb-card-footer class="white d-flex justify-content-end">
              <mdb-btn
                gradient="amy-crisp"
                class="black-text"
                icon="paper-plane"
                rounded
                >Reserve table</mdb-btn
              >
            </mdb-card-footer>
          </mdb-card>
        </section>
      </section>
      <section class="demo-section">
        <h4>Outline form with icons</h4>
        <section>
          <mdb-row>
            <mdb-col md="6">
              <mdb-card>
                <mdb-card-header class="pt-4 cloudy-knoxville-gradient">
                  <mdb-card-title><strong>Reservation</strong></mdb-card-title>
                </mdb-card-header>
                <mdb-card-body>
                  <mdb-col>
                    <mdb-input outline label="name" icon="user" />
                    <mdb-select
                      outline
                      multiple
                      v-model="selectOptions"
                      label="meal"
                      icon="check-square"
                    />
                    <mdb-date-picker outline label="date" icon="calendar" />
                    <mdb-time-picker
                      id="time-picker-2"
                      outline
                      label="time"
                      icon="clock"
                    />
                    <mdb-input
                      :min="2"
                      outline
                      :max="10"
                      icon="user-friends"
                      type="number"
                      label="guests"
                    />
                    <mdb-autocomplete
                      outline
                      icon="heart"
                      clearClass="fa-lg"
                      :data="food"
                      label="Food preferences"
                    />
                    <mdb-input
                      type="textarea"
                      outline
                      label="special requests"
                      icon="pen"
                      :rows="3"
                    />
                  </mdb-col>
                </mdb-card-body>
                <mdb-card-footer class="white d-flex justify-content-end">
                  <mdb-btn
                    gradient="cloudy-knoxville"
                    class="black-text"
                    icon="paper-plane"
                    rounded
                    >Reserve table</mdb-btn
                  >
                </mdb-card-footer>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </section>
      </section>
      <section class="demo-section">
        <h4>Form gradient</h4>
        <section>
          <mdb-row>
            <mdb-col md="5">
              <mdb-card>
                <div class="header pt-3 peach-gradient">
                  <mdb-row class="d-flex justify-content-center">
                    <h3 class="white-text mb-3 pt-3 font-weight-bold">
                      Log in
                    </h3>
                  </mdb-row>
                  <mdb-row class="mt-2 mb-3 d-flex justify-content-center">
                    <a class="fa-lg p-2 m-2 fb-ic">
                      <mdb-icon
                        fab
                        icon="facebook-f"
                        class="white-text"
                        size="lg"
                      />
                    </a>
                    <a class="fa-lg p-2 m-2 tw-ic">
                      <mdb-icon
                        fab
                        icon="twitter"
                        class="white-text"
                        size="lg"
                      />
                    </a>
                    <a class="fa-lg p-2 m-2 gplus-ic">
                      <mdb-icon
                        fab
                        icon="google-plus-g"
                        class="white-text"
                        size="lg"
                      />
                    </a>
                  </mdb-row>
                </div>
                <mdb-card-body class="mx-4 mt-4">
                  <mdb-input label="Your email" type="text" />
                  <mdb-input
                    label="Your password"
                    type="password"
                    containerClass="mb-0"
                  />
                  <p class="font-small grey-text d-flex justify-content-end">
                    Forgot
                    <a href="#" class="dark-grey-text ml-1 font-weight-bold"
                      >Password?</a
                    >
                  </p>
                  <mdb-row class="d-flex align-items-center mb-4 mt-5">
                    <mdb-col md="5" class="d-flex align-items-start">
                      <div class="text-center">
                        <mdb-btn
                          color="grey"
                          rounded
                          type="button"
                          class="z-depth-1a"
                          >Log in</mdb-btn
                        >
                      </div>
                    </mdb-col>
                    <mdb-col md="7" class="d-flex justify-content-end">
                      <p class="font-small grey-text mt-3">
                        Don't have an account?
                        <a href="#" class="dark-grey-text ml-1 font-weight-bold"
                          >Sign up</a
                        >
                      </p>
                    </mdb-col>
                  </mdb-row>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </section>
      </section>
      <section class="demo-section">
        <h4>Form light</h4>
        <section>
          <mdb-row>
            <mdb-col md="5">
              <mdb-card>
                <mdb-card-body class="mx-4">
                  <div class="text-center">
                    <h3 class="pink-text mb-5">
                      <strong>Sign up</strong>
                    </h3>
                  </div>
                  <mdb-input label="Your email" type="text" />
                  <mdb-input label="Your password" type="password" />
                  <mdb-input
                    class="my-5"
                    type="checkbox"
                    id="defaultCheck16"
                    label="Accept the Terms and Conditions"
                  />
                  <mdb-row class="d-flex align-items-center mb-4">
                    <mdb-col md="6" class="text-center">
                      <button
                        type="button"
                        class="btn btn-pink btn-block btn-rounded z-depth-1"
                      >
                        Sign up
                      </button>
                    </mdb-col>
                    <mdb-col md="6">
                      <p
                        class="font-small grey-text d-flex justify-content-end"
                      >
                        Have an account?
                        <a href="#" class="blue-text ml-1">Log in</a>
                      </p>
                    </mdb-col>
                  </mdb-row>
                </mdb-card-body>
                <div class="footer pt-3 mdb-color lighten-3">
                  <mdb-row class="d-flex justify-content-center">
                    <p class="font-small white-text mb-2 pt-3">
                      or Sign up with:
                    </p>
                  </mdb-row>
                  <mdb-row class="mt-2 mb-3 d-flex justify-content-center">
                    <a class="fa-lg p-2 m-2 fb-ic">
                      <mdb-icon
                        fab
                        icon="facebook-f"
                        class="white-text"
                        size="lg"
                      ></mdb-icon>
                    </a>
                    <a class="fa-lg p-2 m-2 tw-ic">
                      <mdb-icon
                        fab
                        icon="twitter"
                        class="white-text"
                        size="lg"
                      ></mdb-icon>
                    </a>
                    <a class="fa-lg p-2 m-2 gplus-ic">
                      <mdb-icon
                        fab
                        icon="google-plus-g"
                        class="white-text"
                        size="lg"
                      ></mdb-icon>
                    </a>
                  </mdb-row>
                </div>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </section>
      </section>
      <section class="demo-section">
        <h4>Form dark</h4>
        <section>
          <mdb-row>
            <mdb-col md="5">
              <mdb-card
                class="card-image"
                :style="{
                  backgroundImage:
                    'url(https://mdbootstrap.com/img/Photos/Others/pricing-table7.jpg)',
                  width: '28rem'
                }"
              >
                <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
                  <div class="text-center">
                    <h3 class="white-text mb-5 mt-4 font-weight-bold">
                      <strong>SIGN</strong>
                      <a class="green-text font-weight-bold">
                        <strong>UP</strong>
                      </a>
                    </h3>
                  </div>
                  <mdb-input label="Your email" type="text" />
                  <mdb-input label="Your password" type="password" />
                  <mdb-input
                    class="my-5"
                    type="checkbox"
                    id="defaultCheck17"
                    label="Accept the Terms and Conditions"
                  />
                  <mdb-row class="d-flex align-items-center mb-4">
                    <div class="text-center mb-3 col-md-12">
                      <mdb-btn
                        color="success"
                        rounded
                        type="button"
                        class="btn-block z-depth-1"
                        >Sign in</mdb-btn
                      >
                    </div>
                  </mdb-row>
                  <mdb-col md="12">
                    <p class="font-small white-text d-flex justify-content-end">
                      Have an account?
                      <a href="#" class="green-text ml-1 font-weight-bold"
                        >Log in</a
                      >
                    </p>
                  </mdb-col>
                </div>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </section>
      </section>
      <section class="demo-section">
        <h4>Form simple</h4>
        <section>
          <mdb-row>
            <mdb-col md="5">
              <mdb-card>
                <div class="header pt-3 grey lighten-2">
                  <mdb-row class="d-flex justify-content-start">
                    <h3 class="black-text mt-3 mb-4 pb-1 mx-5">Log in</h3>
                  </mdb-row>
                </div>
                <mdb-card-body class="mx-4 mt-4">
                  <mdb-input label="Your email" type="text" />
                  <mdb-input
                    label="Your password"
                    type="password"
                    containerClass="mb-0"
                  />
                  <p class="font-small grey-text d-flex justify-content-end">
                    Forgot
                    <a href="#" class="dark-grey-text font-weight-bold ml-1"
                      >Password?</a
                    >
                  </p>
                  <div class="text-center mb-4 mt-5">
                    <mdb-btn
                      color="danger"
                      type="button"
                      class="btn-block z-depth-2"
                      >Log in</mdb-btn
                    >
                  </div>
                  <p class="font-small grey-text d-flex justify-content-center">
                    Don't have an account?
                    <a href="#" class="dark-grey-text font-weight-bold ml-1"
                      >Sign up</a
                    >
                  </p>
                </mdb-card-body>
              </mdb-card>
            </mdb-col>
          </mdb-row>
        </section>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbBtn,
  mdbIcon,
  mdbCard,
  mdbCardBody,
  mdbCardHeader,
  mdbCardTitle,
  mdbModalFooter,
  mdbSelect,
  mdbDatePicker,
  mdbTimePicker,
  mdbCardFooter,
  mdbAutocomplete
} from "mdbvue";


export default {
  name: "FormsPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbInput,
    mdbBtn,
    mdbIcon,
    mdbCard,
    mdbCardBody,
    mdbModalFooter,
    mdbSelect,
    mdbDatePicker,
    mdbTimePicker,
    mdbCardHeader,
    mdbCardTitle,
    mdbCardFooter,
    mdbAutocomplete
  },
  data() {
    return {
      numeric: "hello",
      selectOptions: [
        { text: "Breakfast", value: "Option 1" },
        { text: "Dinner", value: "Option 2" },
        { text: "Brunch", value: "Option 3" },
        { text: "Supper", value: "Option 4" }
      ],
      food: ["Glutenfree", "Vegetarian", "Vegan", "Sugarfree"],
      destination: [
        "Amsterdam",
        "Berlin",
        "Cardiff",
        "Dublin",
        "Frankfurt",
        "Glasgow",
        "Helsinki",
        "Istanbul",
        "Kiev",
        "Lisbon",
        "Madrid",
        "Nice",
        "Oslo",
        "Paris",
        "Riga",
        "Saint Petersburg",
        "Turin",
        "Vienna",
        "Warsaw",
        "Zagreb",
        "Zurich"
      ]
    };
  }
};
</script>

<style>
.form-elegant .font-small {
  font-size: 0.8rem;
}

.form-elegant .z-depth-1a {
  -webkit-box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
    0 4px 12px 0 rgba(121, 155, 254, 0.25);
  box-shadow: 0 2px 5px 0 rgba(55, 161, 255, 0.26),
    0 4px 12px 0 rgba(121, 155, 254, 0.25);
}

.form-elegant .z-depth-1-half,
.form-elegant .btn:hover {
  -webkit-box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
    0 4px 15px 0 rgba(36, 133, 255, 0.15);
  box-shadow: 0 5px 11px 0 rgba(85, 182, 255, 0.28),
    0 4px 15px 0 rgba(36, 133, 255, 0.15);
}

.form-gradient .header {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.form-gradient input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #fd9267;
  -webkit-box-shadow: 0 1px 0 0 #fd9267;
  box-shadow: 0 1px 0 0 #fd9267;
}

.form-gradient input[type="text"]:focus:not([readonly]) + label {
  color: #4f4f4f;
}

.form-gradient input[type="password"]:focus:not([readonly]) {
  border-bottom: 1px solid #fd9267;
  -webkit-box-shadow: 0 1px 0 0 #fd9267;
  box-shadow: 0 1px 0 0 #fd9267;
}

.form-gradient input[type="password"]:focus:not([readonly]) + label {
  color: #4f4f4f;
}

.form-light .font-small {
  font-size: 0.8rem;
}

.form-light [type="radio"] + label,
.form-light [type="checkbox"] + label {
  font-size: 0.8rem;
}

.form-light [type="checkbox"] + label:before {
  top: 2px;
  width: 15px;
  height: 15px;
}

.form-light input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  z-index: 0;
  border-radius: 1px;
  margin-top: 2px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.form-light input[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -3px;
  width: 12px;
  height: 22px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #eb3573 #eb3573 transparent;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.form-light .footer {
  border-bottom-left-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}

.form-dark .font-small {
  font-size: 0.8rem;
}

.form-dark [type="radio"] + label,
.form-dark [type="checkbox"] + label {
  font-size: 0.8rem;
}

.form-dark [type="checkbox"] + label:before {
  top: 2px;
  width: 15px;
  height: 15px;
}

.form-dark .md-form label {
  color: #fff;
}

.form-dark input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #00c851;
  -webkit-box-shadow: 0 1px 0 0 #00c851;
  box-shadow: 0 1px 0 0 #00c851;
}

.form-dark input[type="text"]:focus:not([readonly]) + label {
  color: #fff;
}

.form-dark input[type="password"]:focus:not([readonly]) {
  border-bottom: 1px solid #00c851;
  -webkit-box-shadow: 0 1px 0 0 #00c851;
  box-shadow: 0 1px 0 0 #00c851;
}

.form-dark input[type="password"]:focus:not([readonly]) + label {
  color: #fff;
}

.form-dark input[type="checkbox"] + label:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 17px;
  height: 17px;
  z-index: 0;
  border: 1.5px solid #fff;
  border-radius: 1px;
  margin-top: 2px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}

.form-dark input[type="checkbox"]:checked + label:before {
  top: -4px;
  left: -3px;
  width: 12px;
  height: 22px;
  border-style: solid;
  border-width: 2px;
  border-color: transparent #00c851 #00c851 transparent;
  -webkit-transform: rotate(40deg);
  -ms-transform: rotate(40deg);
  transform: rotate(40deg);
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-transform-origin: 100% 100%;
  -ms-transform-origin: 100% 100%;
  transform-origin: 100% 100%;
}

.form-simple .font-small {
  font-size: 0.8rem;
}

.form-simple .header {
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
}

.form-simple input[type="text"]:focus:not([readonly]) {
  border-bottom: 1px solid #ff3547;
  -webkit-box-shadow: 0 1px 0 0 #ff3547;
  box-shadow: 0 1px 0 0 #ff3547;
}

.form-simple input[type="text"]:focus:not([readonly]) + label {
  color: #4f4f4f;
}

.form-simple input[type="password"]:focus:not([readonly]) {
  border-bottom: 1px solid #ff3547;
  -webkit-box-shadow: 0 1px 0 0 #ff3547;
  box-shadow: 0 1px 0 0 #ff3547;
}

.form-simple input[type="password"]:focus:not([readonly]) + label {
  color: #4f4f4f;
}
</style>
