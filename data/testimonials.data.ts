type testimonialsData = {
  title: string;
  testimonials: {
    name: string;
    company: string;
    rating: number;
    text: string;
    avatar: string;
  }[];
};

export const testimonialsData: testimonialsData = {
  title: "Client Testimonials",
  testimonials: [
    {
      name: "Maurita",
      company: "Client",
      rating: 5,
      text: "Mohin did an outstanding job building my website. Communication was prompt, the work was delivered ahead of schedule, and the final product exceeded my expectations. Very nice guy and his team. Highly recommend—5 ⭐️⭐️⭐️⭐️⭐️!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Frework's",
      company: "Client",
      rating: 5,
      text: "Mohin showed great professionalism, attention to detail, and excellent technical skills. The code is clean, well-structured, and bug-free. He followed all my instructions precisely and exceeded my expectations at every stage of the project. Communication was always clear, and deadlines were respected. Highly recommended for anyone looking for a true professional in the field! 👏",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Digitaldetroit",
      company: "Client",
      rating: 5,
      text: "Very well done – Mohin worked quickly and efficiently.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Pandwegibson",
      company: "Client",
      rating: 5,
      text: "Thank you! You are doing a good job! Thank you so much for your help with this website. You have provided expert service and great communication.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "vkusnobox2025",
      company: "Client",
      rating: 5,
      text: "Very professional, great and quick response any time of the day, will definitely use again",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "adam_stemco",
      company: "Client",
      rating: 5,
      text: "Great job so far!!",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
};
