<template>
  <mdb-container>
    <mdb-row class="mt-5 align-items-center justify-content-start">
      <h4 class="demo-title">
        <strong>Testimonials Sections</strong>
      </h4>
      <a
        href="https://mdbootstrap.com/docs/vue/sections/testimonials/"
        waves-fixed
        class="border grey-text px-2 border-light rounded ml-2"
        target="_blank"
      >
        <mdb-icon icon="graduation-cap" class="mr-2" />Docs
      </a>
    </mdb-row>
    <hr />
    <mdb-container>
      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold my-5">Testimonials v.1</h2>
        <p
          class="dark-grey-text w-responsive mx-auto mb-5"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>
        <mdb-row>
          <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
            <mdb-card testimonial>
              <mdb-card-up color="info"></mdb-card-up>
              <mdb-avatar class="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg"
                  class="rounded-circle img-fluid"
                />
              </mdb-avatar>
              <mdb-card-body>
                <h4 class="font-weight-bold mb-4">John Doe</h4>
                <hr />
                <p class="dark-grey-text mt-4">
                  <mdb-icon icon="quote-left" class="pr-2" />Lorem ipsum dolor sit amet eos adipisci, consectetur adipisicing elit.
                </p>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="6" class="mb-lg-0 mb-4">
            <mdb-card testimonial>
              <mdb-card-up gradient="blue"></mdb-card-up>
              <mdb-avatar class="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  class="rounded-circle img-fluid"
                />
              </mdb-avatar>
              <mdb-card-body>
                <h4 class="font-weight-bold mb-4">Anna Aston</h4>
                <hr />
                <p class="dark-grey-text mt-4">
                  <i class="fas fa-quote-left pr-2"></i>Neque cupiditate assumenda in maiores repudiandae mollitia architecto.
                </p>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="4" md="6" class="mb-lg-0 mb-4">
            <mdb-card testimonial>
              <mdb-card-up class="indigo"></mdb-card-up>
              <mdb-avatar class="mx-auto white">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  class="rounded-circle img-fluid"
                />
              </mdb-avatar>
              <mdb-card-body>
                <h4 class="font-weight-bold mb-4">Maria Kate</h4>
                <hr />
                <p class="dark-grey-text mt-4">
                  <i class="fas fa-quote-left pr-2"></i>Delectus impedit saepe officiis ab aliquam repellat rem unde ducimus.
                </p>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
      </section>
      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold my-5">Testimonials v.2</h2>
        <mdb-carousel testimonial :interval="5000" controlls :items="3">
          <template #[i+1] v-for="(testimonial, i) in testimonials">
            <mdb-testimonial class="text-center" :key="i">
              <mdb-avatar
                wrapperClass="z-depth-1 mb-4"
                :width="200"
                circle
                tag="img"
                :src="testimonial.img"
              />
              <p>
                <mdb-icon icon="quote-left" class="pr-1"></mdb-icon>
                {{testimonial.quote}}
              </p>
              <h4 class="font-weight-bold">{{testimonial.name}}</h4>
              <h6 class="font-weight-bold my-3">{{testimonial.position}}</h6>
              <mdb-rating :value="testimonial.rating" disabled far iconActiveClass="blue-text" />
            </mdb-testimonial>
          </template>
        </mdb-carousel>
      </section>

      <section class="team-section text-center my-5">
        <h2 class="h1-responsive font-weight-bold my-5">Testimonials v.3</h2>
        <p
          class="dark-grey-text w-responsive mx-auto mb-5"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

        <mdb-row class="text-center">
          <mdb-col md="4" class="mb-md-0 mb-5">
            <mdb-testimonial>
              <mdb-avatar class="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </mdb-avatar>
              <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
              <h6 class="font-weight-bold blue-text my-3">Web Designer</h6>
              <p class="font-weight-normal dark-grey-text">
                <mdb-icon class="fas fa-quote-left pr-2" />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.
              </p>
              <div class="orange-text">
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star-half-alt" />
              </div>
            </mdb-testimonial>
          </mdb-col>
          <mdb-col md="4" class="mb-md-0 mb-5">
            <mdb-testimonial>
              <mdb-avatar class="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </mdb-avatar>
              <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
              <h6 class="font-weight-bold blue-text my-3">Web Developer</h6>
              <p class="font-weight-normal dark-grey-text">
                <mdb-icon class="fas fa-quote-left pr-2" />Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <div class="orange-text">
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
              </div>
            </mdb-testimonial>
          </mdb-col>
          <mdb-col md="4">
            <mdb-testimonial>
              <mdb-avatar class="mx-auto">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                />
              </mdb-avatar>
              <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
              <h6 class="font-weight-bold blue-text my-3">Photographer</h6>
              <p class="font-weight-normal dark-grey-text">
                <mdb-icon class="fas fa-quote-left pr-2" />At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <div class="orange-text">
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star" />
                <mdb-icon icon="star-o" />
              </div>
            </mdb-testimonial>
          </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>
  </mdb-container>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbCard,
  mdbCardBody,
  mdbCardUp,
  mdbAvatar,
  mdbIcon,
  mdbCarousel,
  mdbTestimonial,
  mdbRating
} from "mdbvue";

export default {
  name: "TestimonialsPage",
  components: {
    mdbContainer,
    mdbRow,
    mdbCol,
    mdbCard,
    mdbCardBody,
    mdbCardUp,
    mdbAvatar,
    mdbIcon,
    mdbCarousel,
    mdbTestimonial,
    mdbRating
  },
  data() {
    return {
      testimonials: [
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg",
          quote:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.",
          name: "Anna Deynah",
          position: "Founder at ET Company",
          rating: 4
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg",
          quote:
            "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore.",
          name: "Maria Kate",
          position: "Photographer at Studio LA",
          rating: 5
        },
        {
          img: "https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg",
          quote:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          name: "John Doe ",
          position: "Front-end Developer in NY",
          rating: 4
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
