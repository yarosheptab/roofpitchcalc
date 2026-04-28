export const FAQ_ITEMS = [
  {
    question: 'What is roof pitch?',
    answer:
      "Roof pitch is the measure of a roof's steepness, expressed as a ratio of vertical rise to horizontal run. It tells you how much the roof rises vertically for every 12 inches it runs horizontally. For example, a 6:12 pitch means the roof rises 6 inches for every 12 inches of horizontal run. Roof pitch affects drainage, the choice of roofing materials, attic space, and the overall architectural character of a building. A higher pitch sheds rain and snow more effectively and often allows for more usable attic space, while a lower pitch is common on modern and commercial structures where cost efficiency is a priority.",
  },
  {
    question: 'How do I calculate roof pitch?',
    answer:
      'To calculate roof pitch, you need two measurements: rise (how much the roof goes up) and run (the horizontal distance). Divide the rise by the run, then multiply by 12 to get the pitch in the standard X:12 format. For example, if your roof rises 6 inches over a 12-inch horizontal span, the pitch is 6:12. You can also work backwards from an angle: use the tangent function — tan(angle) × 12 gives you the pitch ratio. Our calculator above handles all three methods automatically — enter rise/run, an angle in degrees, or the pitch ratio directly and it instantly computes all the related values.',
  },
  {
    question: 'What is a good roof pitch for a house?',
    answer:
      'The most common residential roof pitch in the United States is 4:12 to 9:12. A 6:12 pitch is often considered the sweet spot — it provides excellent drainage, works with almost all roofing materials including asphalt shingles, metal roofing, and wood shakes, and creates attractive curb appeal without making installation prohibitively expensive. Steeper pitches (9:12 and above) look dramatic and shed snow extremely well, but cost more to install due to the difficulty of working on steep surfaces. In climates with heavy snowfall, pitches of 8:12 or steeper are often recommended to prevent ice dam formation and allow snow to slide off naturally.',
  },
  {
    question: 'How do I convert roof pitch to degrees?',
    answer:
      'To convert a roof pitch ratio to degrees, use the arctangent (inverse tangent) function: Degrees = atan(pitch ÷ 12) × (180 ÷ π). For example, a 6:12 pitch: atan(6 ÷ 12) = atan(0.5) = 26.57°. A 12:12 pitch equals exactly 45°. You can also use our calculator — just enter the pitch ratio in the "Pitch Ratio" tab and the angle in degrees is shown instantly in the results. This conversion is useful when working with roofing tools, software, or specifying angles on architectural drawings where degree measurements are required instead of the standard pitch notation.',
  },
  {
    question: 'What is the minimum roof pitch for shingles?',
    answer:
      "The minimum roof pitch for standard 3-tab asphalt shingles is 2:12 (about 9.5°), but only with special installation methods including double underlayment. For regular installation without special precautions, 4:12 is the universally accepted minimum for most shingle types. Architectural/laminate shingles typically require a minimum of 4:12. Below 2:12, you must use a low-slope roofing system such as TPO, EPDM, modified bitumen, or a built-up roof (BUR). The International Residential Code (IRC) Section R905.2.2 specifies these requirements. Always check local building codes and the manufacturer's installation instructions, as requirements can vary.",
  },
  {
    question: 'How do I measure roof pitch from inside the attic?',
    answer:
      "Measuring roof pitch from inside the attic is often the easiest method. You'll need a level, a tape measure, and a pencil. Step 1: Hold the level horizontally against the underside of a rafter, with one end touching the rafter. Step 2: Mark the point exactly 12 inches along the level from where it touches the rafter. Step 3: Measure the vertical distance from that 12-inch mark straight up to the rafter above. That measurement in inches is your pitch — if you measured 6 inches, your pitch is 6:12. Make sure the level is perfectly horizontal (use the bubble) before taking the measurement. This method works even when roof access from the exterior is difficult or dangerous.",
  },
  {
    question: 'What is the difference between roof pitch and slope?',
    answer:
      'Roof pitch and slope describe the same concept but use different formats. Pitch is expressed as a ratio of rise to a fixed 12-inch run (e.g., 6:12), which is the standard in residential construction in the United States. Slope is usually expressed as a percentage — rise divided by run, multiplied by 100. A 6:12 pitch equals a 50% slope. In commercial roofing, slope is more commonly used and may also be expressed in inches per foot (e.g., 2" per foot = 2:12 pitch). Internationally, slope in degrees is sometimes preferred. All three formats measure the same thing and our calculator converts instantly between all of them.',
  },
  {
    question: 'How does roof pitch affect material costs?',
    answer:
      'Roof pitch significantly impacts both material quantities and labor costs. Steeper roofs require more materials because the actual roof surface area is larger than the footprint — a 12:12 pitch roof has about 41% more surface area than a flat surface covering the same floor plan. Use the rafter multiplier from our calculator to estimate this: a 6:12 pitch has a multiplier of 1.118, meaning you need about 12% more shingles than the floor area suggests. Labor costs also increase with pitch because steeper roofs require more safety equipment, slower work pace, and higher skill. Roofing contractors typically add surcharges for pitches above 7:12 or 8:12, often 10–25% more per square foot of installed roofing.',
  },
]
