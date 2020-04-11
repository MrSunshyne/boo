<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 726.1 871.5">
      <g
        stroke="currentColor"
        stroke-linejoin="round"
        paint-order="markers stroke fill"
      >
        <g transform="translate(0 20)">
          <animate
            attributeName="transform"
            begin="0s"
            dur="2s"
            repeatCount="indefinite"
            to="translate(0 0)"
          />
          <path
            :d="from"
            fill="none"
            stroke-width="11.4"
            stroke-linecap="round"
          >
            <animate
              attributeName="d"
              begin="0s"
              dur="1s"
              calcMode="spline"
              repeatCount="indefinite"
              :values="`${from};${to};${from}`"
            />
          </path>
          <path
            d="M214 271c10-32 42-73 81-57 20 9 34 27 47 44"
            fill="none"
            stroke-width="7.3"
            stroke-linecap="round"
          />
          <path
            d="M637 267c31-12 59-59 78-58 20 9-9 95-49 115-4 2-9 1-14 3M93 312c-21-13-38-32-56-48-7-9-33-29-33-8 0 13 5 26 10 38 10 23 23 45 43 60 9 7 19 12 31 13"
            fill="none"
            stroke-width="8.7"
            stroke-linecap="round"
          />

          <path
            d="M384 263c10-33 42-74 80-57 21 9 35 26 48 43"
            fill="none"
            stroke-width="7.3"
            stroke-linecap="round"
          />
        </g>
        <path
          d="M292 870c-41-4-117-11-107-50 32-30 99-28 149-35 66-7 133 0 200 1 59-3 131 47 41 63-72 15-148 24-223 20l-60 1z"
          fill="black"
          stroke-width="2.7"
          stroke-linecap="square"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from:
        'M34 693c56-74 53-171 52-258 3-118 18-246 99-338 70-80 196-120 293-67 84 50 128 145 157 235 31 106 29 217 41 326 4 42 59 78 28 116s-40-44-80-25c-27 28-63 61-101 26-44-41-71 34-117 21-21-15-40-57-71-29-17 19-28 64-61 35-18-22-49-72-73-27-14 30-56 41-59-1-11-29-42-21-50 9-9 29-78 19-58-23z',
      to:
        'M34 693c56-74 53-171 52-258 3-118 18-246 99-338 70-80 196-120 293-67 84 50 128 145 157 235 31 106 29 217 41 326 4 42 59 78 28 116s-40 41-80 22c-27-28-63-61-101-26-44 41-71-34-117-21-21 15-40 57-71 29-17-19-26.92 23.842-59.92-5.158-18-22-50.08 42.158-74.08-2.842-14-30-56-41-59 1-11 29-42 21-50-9-9-29-78 40-58-2z'
    }
  }
}
</script>
