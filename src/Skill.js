var skill = [
  {
    id: 1,
    name: "Languages",
    sub: [
      {
        sid: 1,
        name: "C++",
        loc:
          "https://developers.redhat.com/blog/wp-content/uploads/2017/06/C-image.jpeg",
      },
      {
        sid: 2,
        name: "C",
        loc:
          "data:image/png;base64,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",
      },
      {
        sid: 3,
        name: "Python",
        loc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
      },
      {
        sid: 4,
        name: "HTML",
        loc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
      },
      {
        sid: 5,
        name: "CSS",
        loc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        sid: 6,
        name: "JavaScript",
        loc:
          "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      },
    ],
  },
  {
    id: 2,
    name: "Frameworks and Libraries",
    sub: [
      {
        sid: 1,
        name: "React",
        loc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
      },
      {
        sid: 2,
        name: "Bootstrap",
        loc:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
      },
    ],
  },
];

export default skill;
