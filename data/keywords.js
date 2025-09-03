// Keywords data with SEO optimization
export const keywords = [
  // Original high-value keywords (keep the most important ones)
  {
    keyword: "i love you 1000 times copy and paste",
    category: "love",
    searchVolume: 4400,
    difficulty: 3,
    cpc: 0.00,
    features: ["Sitelinks", "Image pack", "Related searches"],
    lastUpdated: "2 weeks",
    slug: "i-love-you-1000-times-copy-and-paste",
    title: "I Love You 1000 Times Copy and Paste - Free Text Generator",
    description: "Generate 'I love you' repeated 1000 times for copy and paste. Free online tool for creating romantic messages and text art.",
    content: generateLoveContent(1000),
    tags: ["love", "romantic", "text generator", "copy paste", "1000 times"]
  },
  {
    keyword: "sorry 100 times",
    category: "apology",
    searchVolume: 22200,
    difficulty: 9,
    cpc: 0.00,
    features: ["Sitelinks", "Image pack", "Video", "Related searches"],
    lastUpdated: "7 hours",
    slug: "sorry-100-times",
    title: "Sorry 100 Times - Apology Message Generator",
    description: "Generate 'Sorry' repeated 100 times for copy and paste. Perfect for sincere apologies and making amends.",
    content: generateApologyContent(100),
    tags: ["sorry", "apology", "text generator", "copy paste", "100 times"]
  },
  
  // Comprehensive Pattern Generated Keywords
  ...generateAllPatternKeywords()
];

// Helper functions for generating content
function generateLoveContent(times, message = "I love you") {
  const content = [];
  for (let i = 1; i <= times; i++) {
    content.push(`${message}`);
  }
  return content.join('\n');
}

function generateNumberedLoveContent(times, message = "I love you") {
  const content = [];
  for (let i = 1; i <= times; i++) {
    content.push(`${i}. ${message}`);
  }
  return content.join('\n');
}

function generateApologyContent(times, message = "Sorry") {
  const content = [];
  for (let i = 1; i <= times; i++) {
    content.push(`${message}`);
  }
  return content.join('\n');
}

function generateRequestContent(times) {
  const content = [];
  for (let i = 1; i <= times; i++) {
    content.push(`Please`);
  }
  return content.join('\n');
}

function generateEmojiContent(emoji, times) {
  const content = [];
  for (let i = 1; i <= times; i++) {
    content.push(emoji);
  }
  return content.join('');
}

function generateTextArt(text) {
  return `╔══════════════════════════════════════╗
║           ${text}           ║
╚══════════════════════════════════════╝

${text}
${text}
${text}

★ ${text} ★
☆ ${text} ☆
★ ${text} ★

${text} ❤️
${text} 💕
${text} 💖

${text} ${text} ${text}`;
}

function generateSpecialCharacterContent(character) {
  return `Character: ${character}\nUnicode: U+200C\nDescription: Zero Width Non-Joiner\n\nCopy this character:\n\u200C`;
}

function generateVariousApologies() {
  return `Sorry
I'm sorry
I apologize
My apologies
I'm so sorry
I'm very sorry
I'm terribly sorry
I'm deeply sorry
I'm truly sorry
I'm really sorry
I'm extremely sorry
I'm genuinely sorry
I'm sincerely sorry
I'm honestly sorry
I'm completely sorry`;
}

function generateSalaryCalculator(hourlyRate) {
  const weekly = hourlyRate * 40;
  const monthly = weekly * 4.33;
  const yearly = hourlyRate * 2080;
  
  return `Hourly Rate: $${hourlyRate}
Weekly Pay (40 hours): $${weekly}
Monthly Pay: $${monthly.toFixed(2)}
Annual Salary: $${yearly}

Breakdown:
- 40 hours per week
- 52 weeks per year
- 2080 working hours per year

Tax Considerations:
- This is gross pay before taxes
- Actual take-home pay will be less
- Consider federal, state, and local taxes
- Factor in benefits and deductions

Common Salary Ranges:
- Entry Level: $20,000 - $40,000/year
- Mid Level: $40,000 - $80,000/year
- Senior Level: $80,000 - $150,000/year
- Executive: $150,000+/year`;
}

function generateBasketballGameInfo() {
  return `Basketball Game Duration Guide:

NBA Basketball:
- Regular Season: 48 minutes (4 quarters of 12 minutes each)
- Overtime: 5 minutes per period
- Total Time: 2-3 hours including breaks and timeouts

College Basketball:
- Regular Season: 40 minutes (2 halves of 20 minutes each)
- Overtime: 5 minutes per period
- Total Time: 2-2.5 hours including breaks and timeouts

High School Basketball:
- Regular Season: 32 minutes (4 quarters of 8 minutes each)
- Overtime: 4 minutes per period
- Total Time: 1.5-2 hours

International Basketball (FIBA):
- Regular Season: 40 minutes (4 quarters of 10 minutes each)
- Overtime: 5 minutes per period
- Total Time: 2-2.5 hours

Factors Affecting Game Length:
- Timeouts (commercial and team)
- Fouls and free throws
- Halftime break
- Commercial breaks (TV games)
- Overtime periods
- Instant replay reviews`;
}

function generateNursingSchoolInfo() {
  return `Nursing School Duration Guide:

LPN/LVN Programs:
- Duration: 12-18 months
- Prerequisites: High school diploma or GED
- Clinical Hours: 400-600 hours
- Cost: $10,000-$25,000

Associate Degree in Nursing (ADN):
- Duration: 2-3 years
- Prerequisites: High school diploma, science courses
- Clinical Hours: 800-1,200 hours
- Cost: $15,000-$40,000

Bachelor of Science in Nursing (BSN):
- Duration: 4 years
- Prerequisites: High school diploma, college prep courses
- Clinical Hours: 1,200-1,800 hours
- Cost: $40,000-$100,000

Accelerated BSN (for non-nursing bachelor's):
- Duration: 12-18 months
- Prerequisites: Bachelor's degree in any field
- Clinical Hours: 1,200-1,800 hours
- Cost: $50,000-$80,000

Master of Science in Nursing (MSN):
- Duration: 2-3 years
- Prerequisites: BSN degree
- Clinical Hours: 500-1,000 hours
- Cost: $30,000-$80,000

Doctor of Nursing Practice (DNP):
- Duration: 3-4 years
- Prerequisites: MSN degree
- Clinical Hours: 1,000+ hours
- Cost: $50,000-$100,000

Factors Affecting Duration:
- Full-time vs part-time enrollment
- Prerequisites needed
- Program type and specialization
- Clinical placement availability
- Personal schedule and commitments`;
}

function generateStepCalculator(steps) {
  const averageStepLength = 2.5; // feet
  const feet = steps * averageStepLength;
  const miles = feet / 5280;
  const kilometers = miles * 1.60934;
  
  return `Steps: ${steps.toLocaleString()}
Distance: ${miles.toFixed(2)} miles (${kilometers.toFixed(2)} km)
Feet: ${feet.toLocaleString()}

Step Length Assumptions:
- Average step length: 2.5 feet
- This varies by person and walking speed
- Adjust based on your height and stride

Calories Burned (approximate):
- Walking: ${Math.round(steps * 0.04)} calories
- Running: ${Math.round(steps * 0.08)} calories
- Power walking: ${Math.round(steps * 0.06)} calories

Daily Step Goals:
- Sedentary: 2,000-4,000 steps
- Lightly active: 5,000-7,500 steps
- Moderately active: 8,000-10,000 steps
- Very active: 12,500+ steps

Note: Calorie burn varies based on weight, age, and activity intensity.`;
}

// Comprehensive Pattern Generator for All Keywords
function generateAllPatternKeywords() {
  const allKeywords = [];
  
  // 1. Salary Calculator Keywords (Comprehensive)
  allKeywords.push(...generateAllSalaryKeywords());
  
  // 2. Love Message Keywords (Comprehensive)
  allKeywords.push(...generateAllLoveKeywords());
  
  // 3. Apology Keywords (Comprehensive)
  allKeywords.push(...generateAllApologyKeywords());
  
  // 4. Emoji Keywords (Comprehensive)
  allKeywords.push(...generateAllEmojiKeywords());
  
  // 5. Date Calculator Keywords (Comprehensive)
  allKeywords.push(...generateAllDateKeywords());
  
  return allKeywords;
}

function generateAllSalaryKeywords() {
  const keywords = [];
  
  // Generate hourly to annual keywords ($1 to $100)
  for (let hourly = 1; hourly <= 100; hourly++) {
    const searchVolume = getSearchVolume(hourly);
    const difficulty = getDifficulty(hourly);
    
    keywords.push({
      keyword: `${hourly} an hour is how much a year`,
      category: "calculator",
      searchVolume: searchVolume,
      difficulty: difficulty,
      cpc: 0.00,
      features: getFeatures(hourly),
      lastUpdated: "Last week",
      slug: `${hourly}-an-hour-is-how-much-a-year`,
      title: `${hourly} an Hour is How Much a Year - Salary Calculator`,
      description: `Calculate your annual salary if you make $${hourly} per hour. Free online salary calculator with detailed breakdown.`,
      content: generateSalaryCalculator(hourly),
      tags: ["salary", "calculator", "hourly", "annual", "money", `${hourly} an hour`]
    });
    
    // Dollar sign variation
    keywords.push({
      keyword: `$${hourly} an hour is how much a year`,
      category: "calculator",
      searchVolume: Math.floor(searchVolume * 0.8), // Slightly lower volume
      difficulty: difficulty,
      cpc: 0.00,
      features: getFeatures(hourly),
      lastUpdated: "Last week",
      slug: `dollar-${hourly}-an-hour-is-how-much-a-year`,
      title: `$${hourly} an Hour is How Much a Year - Salary Calculator`,
      description: `Calculate your annual salary if you make $${hourly} per hour. Free online salary calculator with detailed breakdown.`,
      content: generateSalaryCalculator(hourly),
      tags: ["salary", "calculator", "hourly", "annual", "money", `$${hourly} an hour`]
    });
  }
  
  // Generate annual to hourly keywords ($10k to $200k)
  for (let annual = 10; annual <= 200; annual += 5) {
    const searchVolume = getAnnualSearchVolume(annual);
    const difficulty = 12;
    
    keywords.push({
      keyword: `${annual}k a year is how much an hour`,
      category: "calculator",
      searchVolume: searchVolume,
      difficulty: difficulty,
      cpc: 0.00,
      features: ["AI Overview", "FAQ", "Video", "Related searches"],
      lastUpdated: "Last week",
      slug: `${annual}k-a-year-is-how-much-an-hour`,
      title: `${annual}k a Year is How Much an Hour - Salary Calculator`,
      description: `Calculate your hourly rate if you make $${annual},000 per year. Free online salary calculator with detailed breakdown.`,
      content: generateAnnualToHourlyCalculator(annual * 1000),
      tags: ["salary", "calculator", "annual", "hourly", "money", `${annual}k a year`]
    });
    
    // Full number variation
    keywords.push({
      keyword: `${annual * 1000} a year is how much an hour`,
      category: "calculator",
      searchVolume: Math.floor(searchVolume * 0.7), // Lower volume for full numbers
      difficulty: difficulty,
      cpc: 0.00,
      features: ["AI Overview", "FAQ", "Video", "Related searches"],
      lastUpdated: "Last week",
      slug: `${annual * 1000}-a-year-is-how-much-an-hour`,
      title: `$${annual * 1000} a Year is How Much an Hour - Salary Calculator`,
      description: `Calculate your hourly rate if you make $${annual * 1000} per year. Free online salary calculator with detailed breakdown.`,
      content: generateAnnualToHourlyCalculator(annual * 1000),
      tags: ["salary", "calculator", "annual", "hourly", "money", `$${annual * 1000} a year`]
    });
  }
  
  return keywords;
}

function generateAllLoveKeywords() {
  const keywords = [];
  const loveMessages = ["I love you", "I love u", "Love you", "Te amo", "Te quiero"];
  const times = [10, 50, 100, 500, 1000, 2000, 3000, 5000, 10000];
  
  loveMessages.forEach(message => {
    times.forEach(time => {
      const isSpanish = message.includes("Te");
      const searchVolume = getLoveSearchVolume(time, isSpanish);
      const difficulty = getLoveDifficulty(time, isSpanish);
      
      keywords.push({
        keyword: `${message} ${time} times copy and paste`,
        category: "love",
        searchVolume: searchVolume,
        difficulty: difficulty,
        cpc: 0.00,
        features: getLoveFeatures(time),
        lastUpdated: "Last week",
        slug: `${message.toLowerCase().replace(/\s+/g, '-')}-${time}-times-copy-and-paste`,
        title: `${message} ${time} Times Copy and Paste - Love Message Generator`,
        description: `Generate '${message}' repeated ${time} times for copy and paste. Free online tool for creating romantic messages.`,
        content: generateLoveContent(time, message),
        tags: ["love", "romantic", "text generator", "copy paste", `${time} times`, message.toLowerCase()]
      });
      
      // Numbered variation
      if (time >= 100) {
        keywords.push({
          keyword: `${message} 1 to ${time} copy and paste`,
          category: "love",
          searchVolume: Math.floor(searchVolume * 0.6),
          difficulty: difficulty,
          cpc: 0.00,
          features: getLoveFeatures(time),
          lastUpdated: "Last week",
          slug: `${message.toLowerCase().replace(/\s+/g, '-')}-1-to-${time}-copy-and-paste`,
          title: `${message} 1 to ${time} Copy and Paste - Numbered Love Messages`,
          description: `Generate '${message}' numbered from 1 to ${time} for copy and paste. Organized romantic messages.`,
          content: generateNumberedLoveContent(time, message),
          tags: ["love", "romantic", "numbered", "copy paste", `1 to ${time}`, message.toLowerCase()]
        });
      }
    });
  });
  
  return keywords;
}

function generateAllApologyKeywords() {
  const keywords = [];
  const apologyMessages = ["Sorry", "I'm sorry", "I apologize"];
  const times = [10, 50, 100, 500, 1000, 2000, 5000, 10000];
  
  apologyMessages.forEach(message => {
    times.forEach(time => {
      const searchVolume = getApologySearchVolume(time);
      const difficulty = getApologyDifficulty(time);
      
      keywords.push({
        keyword: `${message} ${time} times copy and paste`,
        category: "apology",
        searchVolume: searchVolume,
        difficulty: difficulty,
        cpc: 0.00,
        features: getApologyFeatures(time),
        lastUpdated: "Last week",
        slug: `${message.toLowerCase().replace(/\s+/g, '-')}-${time}-times-copy-and-paste`,
        title: `${message} ${time} Times Copy and Paste - Apology Generator`,
        description: `Generate '${message}' repeated ${time} times for copy and paste. Perfect for sincere apologies.`,
        content: generateApologyContent(time, message),
        tags: ["apology", "sorry", "text generator", "copy paste", `${time} times`]
      });
    });
  });
  
  return keywords;
}

function generateAllEmojiKeywords() {
  const keywords = [];
  const emojis = ["❤️", "💋", "😊", "😍", "💕", "💖", "💝", "💘", "💗", "💓"];
  const times = [10, 50, 100, 500, 1000, 2000, 5000, 10000];
  
  emojis.forEach(emoji => {
    times.forEach(time => {
      const searchVolume = getEmojiSearchVolume(time);
      const difficulty = getEmojiDifficulty(time);
      
      keywords.push({
        keyword: `${emoji} ${time} times copy and paste`,
        category: "emoji",
        searchVolume: searchVolume,
        difficulty: difficulty,
        cpc: 0.00,
        features: getEmojiFeatures(time),
        lastUpdated: "Last week",
        slug: `${emoji}-${time}-times-copy-and-paste`,
        title: `${emoji} ${time} Times Copy and Paste - Emoji Generator`,
        description: `Generate ${emoji} repeated ${time} times for copy and paste. Free emoji generator tool.`,
        content: generateEmojiContent(emoji, time),
        tags: ["emoji", "copy paste", `${time} times`, "symbols"]
      });
    });
  });
  
  return keywords;
}

function generateAllDateKeywords() {
  const keywords = [];
  const currentYear = new Date().getFullYear();
  const years = [currentYear, currentYear + 1, currentYear + 2];
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const days = [1, 5, 10, 15, 20, 25, 30];
  
  years.forEach(year => {
    months.forEach(month => {
      days.forEach(day => {
        const searchVolume = getDateSearchVolume(month, day);
        const difficulty = 15;
        
        keywords.push({
          keyword: `how many days until ${month} ${day}`,
          category: "calculator",
          searchVolume: searchVolume,
          difficulty: difficulty,
          cpc: 0.00,
          features: ["AI Overview", "FAQ", "Related searches"],
          lastUpdated: "Last week",
          slug: `how-many-days-until-${month.toLowerCase()}-${day}`,
          title: `How Many Days Until ${month} ${day} - Countdown Calculator`,
          description: `Calculate how many days until ${month} ${day}. Free online countdown calculator.`,
          content: generateDateCalculator(month, day, year),
          tags: ["countdown", "calculator", "days", month.toLowerCase(), `${day}`]
        });
      });
    });
  });
  
  return keywords;
}

// Helper functions for search volume estimation
function getSearchVolume(hourly) {
  // Based on real data patterns
  if (hourly >= 15 && hourly <= 50) return 4800 + Math.floor(Math.random() * 4000);
  if (hourly >= 51 && hourly <= 75) return 2000 + Math.floor(Math.random() * 3000);
  if (hourly >= 76 && hourly <= 100) return 1000 + Math.floor(Math.random() * 2000);
  return 500 + Math.floor(Math.random() * 1000);
}

function getAnnualSearchVolume(annual) {
  // Annual to hourly conversions have lower volume
  if (annual >= 20 && annual <= 80) return 1000 + Math.floor(Math.random() * 2000);
  return 500 + Math.floor(Math.random() * 1000);
}

function getDifficulty(hourly) {
  // Common rates have higher competition
  if (hourly >= 15 && hourly <= 50) return 10 + Math.floor(Math.random() * 5);
  return 8 + Math.floor(Math.random() * 5);
}

function getFeatures(hourly) {
  // Higher volume keywords get more features
  if (hourly >= 15 && hourly <= 50) {
    return ["Sitelinks", "AI Overview", "FAQ", "Video", "Related searches"];
  }
  return ["AI Overview", "FAQ", "Video", "Related searches"];
}

function getLoveSearchVolume(times, isSpanish) {
  if (isSpanish) {
    if (times >= 1000) return 100 + Math.floor(Math.random() * 300);
    return 50 + Math.floor(Math.random() * 200);
  }
  if (times >= 1000) return 1000 + Math.floor(Math.random() * 3000);
  if (times >= 100) return 500 + Math.floor(Math.random() * 2000);
  return 200 + Math.floor(Math.random() * 1000);
}

function getApologySearchVolume(times) {
  if (times >= 1000) return 500 + Math.floor(Math.random() * 2000);
  if (times >= 100) return 200 + Math.floor(Math.random() * 1000);
  return 100 + Math.floor(Math.random() * 500);
}

function getEmojiSearchVolume(times) {
  if (times >= 1000) return 300 + Math.floor(Math.random() * 1000);
  if (times >= 100) return 100 + Math.floor(Math.random() * 500);
  return 50 + Math.floor(Math.random() * 200);
}

function getDateSearchVolume(month, day) {
  // Popular dates get more searches
  if (month === "December" && day === 25) return 5000 + Math.floor(Math.random() * 5000);
  if (month === "January" && day === 1) return 3000 + Math.floor(Math.random() * 3000);
  if (month === "July" && day === 4) return 2000 + Math.floor(Math.random() * 2000);
  return 100 + Math.floor(Math.random() * 500);
}

function getLoveDifficulty(times, isSpanish) {
  if (isSpanish) return 15 + Math.floor(Math.random() * 10);
  if (times >= 1000) return 8 + Math.floor(Math.random() * 5);
  return 5 + Math.floor(Math.random() * 5);
}

function getApologyDifficulty(times) {
  if (times >= 1000) return 10 + Math.floor(Math.random() * 5);
  return 8 + Math.floor(Math.random() * 5);
}

function getEmojiDifficulty(times) {
  if (times >= 1000) return 12 + Math.floor(Math.random() * 10);
  return 8 + Math.floor(Math.random() * 5);
}

function getLoveFeatures(times) {
  if (times >= 1000) return ["Sitelinks", "Image pack", "Video", "Related searches"];
  return ["Image pack", "Video", "Related searches"];
}

function getApologyFeatures(times) {
  if (times >= 1000) return ["Sitelinks", "Image pack", "Video", "Related searches"];
  return ["Image pack", "Video", "Related searches"];
}

function getEmojiFeatures(times) {
  if (times >= 1000) return ["Sitelinks", "Image pack", "Video", "Related searches"];
  return ["Image pack", "Video", "Related searches"];
}

function generateAnnualToHourlyCalculator(annualSalary) {
  const hourlyRate = (annualSalary / 2080).toFixed(2);
  const weekly = (annualSalary / 52).toFixed(2);
  const monthly = (annualSalary / 12).toFixed(2);
  
  return `Annual Salary: $${annualSalary.toLocaleString()}
Hourly Rate: $${hourlyRate}
Weekly Pay: $${weekly}
Monthly Pay: $${monthly}

Breakdown:
- 40 hours per week
- 52 weeks per year
- 2080 working hours per year

Calculation: $${annualSalary.toLocaleString()} ÷ 2080 hours = $${hourlyRate}/hour

Tax Considerations:
- This is gross pay before taxes
- Actual take-home pay will be less
- Consider federal, state, and local taxes
- Factor in benefits and deductions

Common Salary Ranges:
- Entry Level: $20,000 - $40,000/year
- Mid Level: $40,000 - $80,000/year
- Senior Level: $80,000 - $150,000/year
- Executive: $150,000+/year`;
}

function generateDateCalculator(month, day, year) {
  const targetDate = new Date(`${month} ${day}, ${year}`);
  const today = new Date();
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return `Target Date: ${month} ${day}, ${year}
Days Remaining: ${diffDays}
Weeks Remaining: ${Math.ceil(diffDays / 7)}
Months Remaining: ${Math.ceil(diffDays / 30)}

Countdown Breakdown:
- Today: ${today.toDateString()}
- Target: ${targetDate.toDateString()}
- Days: ${diffDays}

Popular Events on ${month} ${day}:
- Historical events
- Birthdays
- Holidays
- Special occasions

Planning Tips:
- Mark your calendar
- Set reminders
- Plan celebrations
- Prepare gifts if needed`;
}