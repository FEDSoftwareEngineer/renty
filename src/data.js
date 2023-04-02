import bed1 from "./images/bed1.webp";
import bed2 from "./images/bed2.webp";
import bed3 from "./images/bed3.webp";
import bed4 from "./images/bed4.webp";
import bed5 from "./images/bed5.webp";
import bed6 from "./images/bed6.webp";
import bed7 from "./images/bed7.webp";
import bed8 from "./images/bed8.webp";
import bed9 from "./images/bed9.webp";
import bed10 from "./images/bed10.webp";
import livingroom1 from "./images/livingroom1.webp";
import livingroom2 from "./images/livingroom2.webp";
import livingroom3 from "./images/livingroom3.webp";
import livingroom4 from "./images/livingroom4.webp";
import livingroom5 from "./images/livingroom5.webp";
import livingroom6 from "./images/livingroom6.webp";
import livingroom7 from "./images/livingroom7.webp";
import livingroom8 from "./images/livingroom8.webp";
import livingroom9 from "./images/livingroom9.webp";
import livingroom10 from "./images/livingroom10.webp";
import kitchen1 from "./images/kitchen1.webp";
import kitchen2 from "./images/kitchen2.webp";
import kitchen3 from "./images/kitchen3.webp";
import kitchen4 from "./images/kitchen4.webp";
import kitchen5 from "./images/kitchen5.webp";
import kitchen6 from "./images/kitchen6.webp";
import kitchen7 from "./images/kitchen7.webp";
import kitchen8 from "./images/kitchen8.webp";
import kitchen9 from "./images/kitchen9.webp";
import kitchen10 from "./images/kitchen10.webp";
import garadge1 from "./images/garadge1.webp";
import garadge2 from "./images/garadge2.webp";
import garadge3 from "./images/bed3.webp";
import garden1 from "./images/garden1.webp";
import garden2 from "./images/garden2.webp";
import garden3 from "./images/garden3.webp";
import garden4 from "./images/garden4.webp";

const data = [
  {
    title: "Big house in central city",
    rooms: 8,
    images: [bed1, livingroom1, kitchen1],
    capacity: 5,
    price: 2300,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Small pool",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds",
    ],
  },
  {
    title: "decent house with nice view",
    rooms: 3,
    images: [bed2, livingroom2, kitchen2],
    capacity: 2,
    price: 5300,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds",
    ],
  },
  {
    title: "Small house in CT",
    rooms: 2,
    garden: true,
    images: [bed3, livingroom3, kitchen3, garden1],
    capacity: 2,
    price: 8000,
    featured: true,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Beautiful garden",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds",
    ],
  },
  {
    title: "Penthouse in EB2",
    rooms: 15,
    images: [bed4, livingroom4, kitchen4, garadge1],
    capacity: 12,
    garadge: true,
    price: 7000,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Big pool",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Big garadge",
      "Internet",
      "Comfortable beds",
    ],
  },
  {
    title: "Apartment in EC street 11",
    rooms: 2,
    images: [bed5, livingroom5, kitchen5],
    capacity: 6,
    price: 4600,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds",
    ],
  },

  {
    title: "2 floor house for rich people",
    rooms: 9,
    images: [bed6, livingroom6, kitchen6, garden2, garadge2],
    capacity: 9,
    garden: true,
    garadge: true,
    price: 9800,
    featured: true,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Small garadge for 1 car",
      "Complimentary refreshments",
      "Nice garden",
      "Internet",
      "Comfortable beds",
    ],
  },
  {
    title: "luxery House with pool",
    rooms: 2,
    images: [bed7, livingroom7, kitchen7, garden3],
    capacity: 4,
    garden: true,
    price: 3100,
    featured: true,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Plush pillows and breathable bed linens",
      "Soft, oversized bath towels",
      "Indoor garden",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds",
    ],
  },
  {
    title: "Big house in central berlin",
    rooms: 3,
    images: [bed8, livingroom8, kitchen8, garadge3],
    capacity: 5,
    garadge: true,
    price: 3300,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Huge garadge can fit 5 cars",
      "Soft, oversized bath towels",
      "Full-sized, pH-balanced toiletries",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds",
    ],
  },
  {
    title: "Big house with outdoor garden",
    rooms: 4,
    images: [bed9, livingroom9, kitchen9, garden4],
    capacity: 5,
    garden: true,
    price: 5500,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "Beatiful garden",
      "Soft, oversized bath towels",
      "A toitlet in each floor",
      "Complimentary refreshments",
      "Nice neighbors",
      "Internet",
      "Comfortable beds",
    ],
  },
  {
    title: "3 floors giant house",
    rooms: 3,
    images: [bed10, livingroom10, kitchen10],
    capacity: 11,
    price: 8000,
    featured: true,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab.
          Illo, laboriosam labore expedita unde, placeat neque doloribus eum
          beatae nobis saepe impedit nemo quisquam. Odio voluptatum animi ad
          commodi suscipit et quam eveniet voluptates, similique consectetur!
          Provident, qui, obcaecati possimus odit doloribus aut corrupti minima
          ducimus ipsum itaque consequuntur eos amet quod eveniet iure labore
          sequi excepturi ex libero maxime consequatur! Doloremque ducimus iusto
          aut ab fuga, alias iste, corrupti, quia maxime obcaecati cupiditate
          distinctio error. Culpa autem consectetur obcaecati rem quam optio
          veniam voluptate eaque dignissimos fugit adipisci aperiam ab maxime
          facere, eius aut. Illum quidem, nam temporibus quod dolorem, earum
          amet nemo eius assumenda sequi corporis nihil`,
    extras: [
      "A toilet on each floor",
      "Soft, oversized bath towels",
      "Big pool",
      "Complimentary refreshments",
      "Adequate safety/security",
      "Internet",
      "Comfortable beds",
    ],
  },
];

export default data;
