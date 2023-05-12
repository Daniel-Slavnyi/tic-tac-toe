const shapes = {
  circle: `<svg class="circle">
// <circle
//   r="30"
//   cx="50%"
//   cy="50%"
//   stroke="blue"
//   stroke-width="10px"
//   fill="none"
//   stroke-linecap="round"
// />
// </svg>`,
  cross: `<svg class="cross">
  <line
    class="first-line"
    x1="30%"
    y1="30%"
    x2="70%"
    y2="70%"
    stroke="yellow"
    stroke-width="10px"
    stroke-linecap="round"
  />
  <line
    class="second-line"
    x1="30%"
    y1="70%"
    x2="70%"
    y2="30%"
    stroke="yellow"
    stroke-width="10px"
    stroke-linecap="round"
  />
</svg>`,
};

export default shapes;
