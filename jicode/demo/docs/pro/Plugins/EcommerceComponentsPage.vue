<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title"><strong>E-commerce components</strong></h4>
      <a href="https://mdbootstrap.com/plugins/vue/e-commerce-components/?utm_source=DemoApp&utm_medium=MDBVuePro" waves-fixed class="border grey-text px-2 border-light rounded ml-2" target="_blank"><mdb-icon icon="graduation-cap" class="mr-2"/>Docs</a>
    </mdb-row>
    <hr class="mb-5" />
    <section class="demo-section">
      <h4>Product card v.1</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" sm="6">
            <mdb-card wide ecommerce>
              <mdb-view cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(2).jpg" top alt="sample photo" />
                <mdb-mask overlay="white-slight" waves />
              </mdb-view>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="text-muted">
                  <h5>Shoes</h5>
                </a>
                <mdb-card-title>
                  <strong><a href="">Product name</a></strong>
                </mdb-card-title>
                <mdb-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left">
                    49$
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Share
                        </div>
                        <mdb-icon slot="reference" icon="eye" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a class="active">
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Added to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Product card v.2</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" sm="6">
            <mdb-card narrow ecommerce>
              <mdb-view cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(5).jpg" top alt="sample photo" />
                <mdb-mask overlay="white-slight" waves />
              </mdb-view>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="text-muted">
                  <h5>Category</h5>
                </a>
                <mdb-card-title>
                  <strong><a href="">Product name</a></strong>
                </mdb-card-title>
                <mdb-card-text>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left">
                    49$
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Quick look
                        </div>
                        <mdb-icon slot="reference" icon="eye" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Product card v.3</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" sm="6">
            <mdb-card cascade ecommerce>
              <mdb-view cascade>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/belt.jpg" top alt="sample photo" />
                <mdb-mask overlay="white-slight" waves />
              </mdb-view>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="text-muted">
                  <h5>Category</h5>
                </a>
                <mdb-card-title>
                  <strong><a href="">Product name</a></strong>
                </mdb-card-title>
                <mdb-card-text>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left">49$ <span class="discount">199$</span>
                  </span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Product card v.4</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" sm="6">
            <mdb-card wide ecommerce>
              <mdb-view cascade>
                <mdb-card-image waves src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(4).jpg" top alt="sample photo" />
              </mdb-view>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="text-muted">
                  <h5>Category</h5>
                </a>
                <mdb-card-title>
                  <strong><a href="">Product name</a></strong>
                </mdb-card-title>
                <ul class="rating">
                  <li><mdb-icon icon="star" /></li>
                  <li><mdb-icon icon="star" /></li>
                  <li><mdb-icon icon="star" /></li>
                  <li><mdb-icon icon="star" /></li>
                  <li><mdb-icon far icon="star" /></li>
                </ul>
                <mdb-card-text>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left">49$ <span class="discount">199$</span></span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Share
                        </div>
                        <mdb-icon slot="reference" icon="eye" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a class="active">
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Added to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Product card v.5</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" sm="6">
            <mdb-card wide ecommerce>
              <mdb-view cascade>
                <mdb-card-image waves src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).jpg" top alt="sample photo" />
              </mdb-view>
              <mdb-card-body class="text-center" cascade>
                <a href="" class="text-muted">
                  <h5>Shoes</h5>
                </a>
                <mdb-card-title>
                  <strong><a href="">Product name</a></strong>
                </mdb-card-title>
                <ul class="rating">
                  <li><mdb-icon icon="star" /></li>
                  <li><mdb-icon icon="star" /></li>
                  <li><mdb-icon icon="star" /></li>
                  <li><mdb-icon icon="star" /></li>
                  <li><mdb-icon far icon="star" /></li>
                </ul>
                <mdb-card-text>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</mdb-card-text>
                <mdb-card-footer color="white" textColor="black" class="px-1">
                  <span class="float-left">49$</span>
                  <span class="float-right">
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Add to cart
                        </div>
                        <mdb-icon slot="reference" icon="shopping-cart" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a>
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Share
                        </div>
                        <mdb-icon slot="reference" icon="eye" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                    <a class="active">
                      <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                        <div class="tooltip">
                          Added to watchlist
                        </div>
                        <mdb-icon slot="reference" icon="heart" class="ml-3"></mdb-icon>
                      </mdb-tooltip>
                    </a>
                  </span>
                </mdb-card-footer>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Collection cards</h4>
      <section>
        <mdb-row>
          <mdb-col md="4" sm="6">
            <mdb-card collection>
              <mdb-view zoom>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg" alt=""/>
                <div class="stripe light">
                  <a>
                    <p>Title <mdb-icon icon="chevron-right"/></p>
                  </a>
                </div>
              </mdb-view>
            </mdb-card>
          </mdb-col>
          <mdb-col md="4" sm="6">
            <mdb-card collection>
              <mdb-view zoom>
                <mdb-card-image src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/img%20(5).jpg" alt=""/>
                <div class="stripe dark">
                  <a>
                    <p>Title <mdb-icon icon="chevron-right"/></p>
                  </a>
                </div>
              </mdb-view>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
    </section>
    <section class="demo-section">
      <h4>Shopping Cart Table</h4>
      <section>
        <mdb-card>
          <mdb-card-body>
            <mdb-tbl responsive class="product-table">
              <mdb-tbl-head color="mdb-color" class="lighten-5">
                <tr>
                  <th></th>
                  <th class="font-weight-bold">
                    <strong>Product</strong>
                  </th>
                  <th class="font-weight-bold">
                    <strong>Color</strong>
                  </th>
                  <th></th>
                  <th class="font-weight-bold">
                    <strong>Price</strong>
                  </th>
                  <th class="font-weight-bold">
                    <strong>QTY</strong>
                  </th>
                  <th class="font-weight-bold">
                    <strong>Amount</strong>
                  </th>
                  <th></th>
                </tr>
              </mdb-tbl-head>
              <mdb-tbl-body>
                <!-- First row -->
                <tr>
                  <th scope="row">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" alt="" class="img-fluid z-depth-0">
                  </th>
                  <td>
                    <h5 class="mt-3">
                      <strong>iPhone</strong>
                    </h5>
                    <p class="text-muted">Apple</p>
                  </td>
                  <td>White</td>
                  <td></td>
                  <td>$800</td>
                  <td>
                    <input type="number" min="0" value="2" aria-label="Search" class="form-control" style="width: 100px">
                  </td>
                  <td class="font-weight-bold">
                    <strong>$800</strong>
                  </td>
                  <td>
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                      <div class="tooltip">Remove item</div>
                      <mdb-btn slot="reference" color="primary" size="sm">X</mdb-btn>
                    </mdb-tooltip>
                  </td>
                </tr>
                <!-- /.First row -->

                <!-- Second row -->
                <tr>
                  <th scope="row">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg" alt="" class="img-fluid z-depth-0">
                  </th>
                  <td>
                    <h5 class="mt-3">
                      <strong>Headphones</strong>
                    </h5>
                    <p class="text-muted">Sony</p>
                  </td>
                  <td>Red</td>
                  <td></td>
                  <td>$200</td>
                  <td>
                    <input type="number" min="0" value="2" aria-label="Search" class="form-control" style="width: 100px">
                  </td>
                  <td class="font-weight-bold">
                    <strong>$600</strong>
                  </td>
                  <td>
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                      <div class="tooltip">Remove item</div>
                      <mdb-btn slot="reference" color="primary" size="sm">X</mdb-btn>
                    </mdb-tooltip>
                  </td>
                </tr>
                <!-- /.Second row -->

                <!-- Third row -->
                <tr>
                  <th scope="row">
                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg" alt="" class="img-fluid z-depth-0">
                  </th>
                  <td>
                    <h5 class="mt-3">
                      <strong>iPad Pro</strong>
                    </h5>
                    <p class="text-muted">Apple</p>
                  </td>
                  <td>Gold</td>
                  <td></td>
                  <td>$600</td>
                  <td>
                    <input type="number" min="0" value="2" aria-label="Search" class="form-control" style="width: 100px">
                  </td>
                  <td class="font-weight-bold">
                    <strong>$1200</strong>
                  </td>
                  <td>
                    <mdb-tooltip trigger="hover" :options="{placement: 'top'}">
                      <div class="tooltip">Remove item</div>
                      <mdb-btn slot="reference" color="primary" size="sm">X</mdb-btn>
                    </mdb-tooltip>
                  </td>
                </tr>
                <!-- /.Third row -->

                <!-- Fourth row -->
                <tr>
                  <td colspan="3"></td>
                  <td>
                    <h4 class="mt-2">
                      <strong>Total</strong>
                    </h4>
                  </td>
                  <td class="text-right">
                    <h4 class="mt-2">
                      <strong>$2600</strong>
                    </h4>
                  </td>
                  <td colspan="3" class="text-right">
                    <mdb-btn color="primary" rounded icon="angle-right" iconRight>Complete purchase</mdb-btn>
                  </td>
                </tr>
                <!-- Fourth row -->
              </mdb-tbl-body>
            </mdb-tbl>
          </mdb-card-body>
        </mdb-card>
      </section>
    </section>
    <section class="demo-section">
      <h4>Checkout panel</h4>
      <section>
        <mdb-card>
          <mdb-card-body>
            <mdb-row>
              <mdb-col lg="8" class="mb-4">
                <mdb-tab pills justify color="primary">
                  <mdb-tab-item :active="tab==0" @click.native.prevent="tab=0">1. Billing</mdb-tab-item>
                  <mdb-tab-item :active="tab==1" @click.native.prevent="tab=1">2. Addons</mdb-tab-item>
                  <mdb-tab-item :active="tab==2" @click.native.prevent="tab=2">3. Payment</mdb-tab-item>
                </mdb-tab>
                <mdb-tab-content>
                  <mdb-tab-pane class="fade" key="show1" v-if="tab==0">
                    <!--Card content-->
                    <form>

                      <!--Grid row-->
                      <div class="row">

                        <!--Grid column-->
                        <div class="col-md-6 mb-4">

                          <!--firstName-->
                          <label for="firstName" class="">First name</label>
                          <input type="text" id="firstName" class="form-control">

                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-md-6 mb-2">

                          <!--lastName-->
                          <label for="lastName" class="">Last name</label>
                          <input type="text" id="lastName" class="form-control">

                        </div>
                        <!--Grid column-->

                      </div>
                      <!--Grid row-->

                      <!--Username-->
                      <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">@</span>
                        </div>
                        <input type="text" class="form-control py-0" placeholder="Username" aria-describedby="basic-addon1">
                      </div>

                      <!--email-->
                      <label for="email" class="">Email (optional)</label>
                      <input type="text" id="email" class="form-control mb-4" placeholder="youremail@example.com">

                      <!--address-->
                      <label for="address" class="">Address</label>
                      <input type="text" id="address" class="form-control mb-4" placeholder="1234 Main St">

                      <!--address-2-->
                      <label for="address-2" class="">Address 2 (optional)</label>
                      <input type="text" id="address-2" class="form-control mb-4" placeholder="Apartment or suite">

                      <!--Grid row-->
                      <div class="row">

                        <!--Grid column-->
                        <div class="col-lg-4 col-md-12 mb-4">

                          <label for="country">Country</label>
                          <select class="custom-select d-block w-100" id="country" required>
                            <option value="">Choose...</option>
                            <option>United States</option>
                          </select>
                          <div class="invalid-feedback">
                            Please select a valid country.
                          </div>

                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-lg-4 col-md-6 mb-4">

                          <label for="state">State</label>
                          <select class="custom-select d-block w-100" id="state" required>
                            <option value="">Choose...</option>
                            <option>California</option>
                          </select>
                          <div class="invalid-feedback">
                            Please provide a valid state.
                          </div>

                        </div>
                        <!--Grid column-->

                        <!--Grid column-->
                        <div class="col-lg-4 col-md-6 mb-4">

                          <label for="zip">Zip</label>
                          <input type="text" class="form-control" id="zip" placeholder="" required>
                          <div class="invalid-feedback">
                            Zip code required.
                          </div>

                        </div>
                        <!--Grid column-->

                      </div>
                      <!--Grid row-->

                      <hr>

                      <div class="mb-1">
                        <input type="checkbox" class="form-check-input filled-in" id="chekboxRules">
                        <label class="form-check-label" for="chekboxRules">I accept the terms and conditions</label>
                      </div>
                      <div class="mb-1">
                        <input type="checkbox" class="form-check-input filled-in" id="safeTheInfo">
                        <label class="form-check-label" for="safeTheInfo">Save this information for next time</label>
                      </div>
                      <div class="mb-1">
                        <input type="checkbox" class="form-check-input filled-in" id="subscribeNewsletter">
                        <label class="form-check-label" for="subscribeNewsletter">Subscribe to the newsletter</label>
                      </div>

                      <hr>

                      <mdb-btn color="primary" size="lg" block type="submit">Next step</mdb-btn>

                    </form>
                  </mdb-tab-pane>
                  <mdb-tab-pane class="fade" key="show2" v-if="tab==1">
                    <!--Grid row-->
                    <div class="row">

                      <!--Grid column-->
                      <div class="col-md-5 mb-4">

                        <img src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" class="img-fluid z-depth-1-half"
                          alt="Second sample image">

                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-md-7 mb-4">

                        <h5 class="mb-3 h5">Additional premium support</h5>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ea ut aperiam corrupti,
                          dolorem.</p>

                        <mdb-select label="Choose a period of time" color="info" :options="options" />

                        <mdb-btn color="primary" size="md">Add premium support to the cart</mdb-btn>

                      </div>
                      <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <hr class="mb-5">

                    <!--Grid row-->
                    <div class="row">

                      <!--Grid column-->
                      <div class="col-md-5 mb-4">

                        <img src="https://mdbootstrap.com/img/Photos/Others/images/44.jpg" class="img-fluid z-depth-1-half"
                          alt="Second sample image">

                      </div>
                      <!--Grid column-->

                      <!--Grid column-->
                      <div class="col-md-7 mb-4">

                        <h5 class="mb-3 h5">MDB Membership</h5>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ea ut aperiam corrupti,
                          dolorem.</p>

                        <mdb-select label="Choose a period of time" color="info" :options="options2" />

                        <mdb-btn color="primary" size="md">Add MDB Membership to the cart</mdb-btn>

                      </div>
                      <!--Grid column-->

                    </div>
                    <!--Grid row-->

                    <hr class="mb-4">

                    <mdb-btn color="primary" size="lg" block type="submit">Next step</mdb-btn>

                  </mdb-tab-pane>
                  <mdb-tab-pane class="fade" key="show3" v-if="tab==2">

                    <div class="d-block my-3">
                      <div class="mb-2">
                        <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap4" checked>
                        <label class="form-check-label" for="radioWithGap4">Credit card</label>
                      </div>
                      <div class="mb-2">
                        <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap5">
                        <label class="form-check-label" for="radioWithGap5">Debit card</label>
                      </div>
                      <div class="mb-2">
                        <input name="group2" type="radio" class="form-check-input with-gap" id="radioWithGap6">
                        <label class="form-check-label" for="radioWithGap6">Paypal</label>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <label for="cc-name123">Name on card</label>
                        <input type="text" class="form-control" id="cc-name123" placeholder="" required>
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                          Name on card is required
                        </div>
                      </div>
                      <div class="col-md-6 mb-3">
                        <label for="cc-number123">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number123" placeholder="" required>
                        <div class="invalid-feedback">
                          Credit card number is required
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-3 mb-3">
                        <label for="cc-expiration123">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration123" placeholder="" required>
                        <div class="invalid-feedback">
                          Expiration date required
                        </div>
                      </div>
                      <div class="col-md-3 mb-3">
                        <label for="cc-cvv123">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv123" placeholder="" required>
                        <div class="invalid-feedback">
                          Security code required
                        </div>
                      </div>
                    </div>
                    <hr class="mb-4">

                    <mdb-btn color="primary" size="lg" block type="submit">Place order</mdb-btn>
                  </mdb-tab-pane>
                </mdb-tab-content>
              </mdb-col>
              <mdb-col lg="4" class="mb-4">
                <mdb-btn color="primary" size="lg" block type="submit">Place order</mdb-btn>
                <!--Card-->
                <mdb-card>

                  <!--Card content-->
                  <mdb-card-body>
                    <h4 class="mb-4 mt-1 h5 text-center font-weight-bold">Summary</h4>

                    <hr>

                    <dl class="row">
                      <dd class="col-sm-8">
                        MDBootstrap UI KIT (jQuery version) - License 6-10 poeple + unlimited projects
                      </dd>
                      <dd class="col-sm-4">
                        $ 2000
                      </dd>
                    </dl>

                    <hr>

                    <dl class="row">
                      <dd class="col-sm-8">
                        Premium support - 2 years
                      </dd>
                      <dd class="col-sm-4">
                        $ 2000
                      </dd>
                    </dl>

                    <hr>

                    <dl class="row">
                      <dd class="col-sm-8">
                        MDB Membership - 2 years
                      </dd>
                      <dd class="col-sm-4">
                        $ 2000
                      </dd>
                    </dl>

                    <hr>

                    <dl class="row">
                      <dt class="col-sm-8">
                        Total
                      </dt>
                      <dt class="col-sm-4">
                        $ 6000
                      </dt>
                    </dl>
                  </mdb-card-body>

                </mdb-card>
                <!--/.Card-->
              </mdb-col>
            </mdb-row>
          </mdb-card-body>
        </mdb-card>
      </section>
    </section>
  </mdb-container>
</template>

<script>
import { mdbContainer, mdbRow, mdbCol, mdbIcon, mdbCard, mdbView, mdbMask, mdbCardImage, mdbCardBody, mdbCardTitle, mdbCardText, mdbCardFooter, mdbTooltip, mdbTbl, mdbTblHead, mdbTblBody, mdbBtn, mdbTab, mdbTabItem, mdbTabContent, mdbTabPane, mdbSelect } from 'mdbvue';

export default {
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbIcon,
    mdbCard,
    mdbView,
    mdbMask,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbTooltip,
    mdbTbl,
    mdbTblHead,
    mdbTblBody,
    mdbBtn,
    mdbTab,
    mdbTabItem,
    mdbTabContent,
    mdbTabPane,
    mdbSelect
  },
  data() {
    return {
      tab: 0,
      options: [
        { text: '+6 months : 200$', value: 1 }, 
        { text: '+12 months: 400$', value: 2 }, 
        { text: '+18 months: 800$', value: 3 }, 
        { text: '+24 months: 1200$', value: 4 }
      ],
      options2: [
        { text: '+6 months : 200$', value: 1 }, 
        { text: '+12 months: 400$', value: 2 }, 
        { text: '+18 months: 800$', value: 3 }, 
        { text: '+24 months: 1200$', value: 4 }
      ],
    };
  }
};
</script>

<style>
</style>
