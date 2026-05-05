import React from "react";

import CardP from "./components/CardP";
const jobOpenings = [
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95zj-M-Gr0KC6_hPiTBxgsEdNBB2BpWV0MA&s",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7_FvYXAOpcaS3FJTGZzjH0sh6T50ffKfH9g&s",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Bangalore, India",
  },
  {
    brandlogo:
      "data:image/png;base64,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",
    company: "Amazon",
    datePosted: "10 days ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India",
  },
  {
    brandlogo:
      "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png",
    company: "Meta",
    datePosted: "1 month ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
    company: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote",
  },
  {
    brandlogo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210729021049",
    company: "Microsoft",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Pune, India",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsy9DVbzBn3nlR5glCzV6YT2O3UMU4FHFDRg&s",
    company: "Adobe",
    datePosted: "2 months ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hr",
    location: "Noida, India",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPzZes0nQNNBGW9AubrQLhcO0tkyxSL0h_Cw&s",
    company: "Tesla",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$75/hr",
    location: "Remote",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
    company: "Uber",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Mumbai, India",
  },
  {
    brandlogo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8fYsTmR0-TXLa06mx13LRXBgbNyBgylU3cw&s",
    company: "Airbnb",
    datePosted: "3 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$85/hr",
    location: "Remote",
  },
];

const App = () => {
  return (
    <div className="parent">
      {jobOpenings.map(function (elem, idx) {
        return (
          <div key={idx}>
            <CardP
              key={idx}
              companyname={elem.company}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              place={elem.location}
              brandlogo={elem.brandlogo}
              dateposted={elem.dateposted}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;

//undertanding props
// <div className="parent">
//   <Card
//     user="pawan"
//     age={18}
//     img="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   />
//   <Card
//     user="sai"
//     age={25}
//     img="https://plus.unsplash.com/premium_photo-1661508620175-3ae20da61cda?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//   />
// </div>
