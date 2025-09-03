'use client';

import { useState } from 'react';
import { KeywordData } from '@/data/keywords';
import PageLayout from './PageLayout';

interface Props {
  keyword: string;
  data: KeywordData;
  numbers: number[];
}

export default function SalaryCalculatorPage({ keyword, numbers }: Props) {
  const [hourlyRate, setHourlyRate] = useState(numbers[0] || 25);
  const [hoursPerWeek, setHoursPerWeek] = useState(40);
  const [weeksPerYear, setWeeksPerYear] = useState(52);
  
  const calculateAnnualSalary = () => {
    return hourlyRate * hoursPerWeek * weeksPerYear;
  };
  
  const calculateMonthly = () => {
    return calculateAnnualSalary() / 12;
  };
  
  const calculateBiweekly = () => {
    return (hourlyRate * hoursPerWeek * 2);
  };
  
  const calculateWeekly = () => {
    return hourlyRate * hoursPerWeek;
  };
  
  const calculateDaily = () => {
    return hourlyRate * (hoursPerWeek / 5);
  };
  
  const annualSalary = calculateAnnualSalary();
  const monthlySalary = calculateMonthly();
  const biweeklySalary = calculateBiweekly();
  const weeklySalary = calculateWeekly();
  const dailySalary = calculateDaily();
  
  // Calculate taxes (rough estimate)
  const estimatedTaxRate = 0.22; // 22% average tax rate
  const afterTaxAnnual = annualSalary * (1 - estimatedTaxRate);
  const afterTaxMonthly = afterTaxAnnual / 12;
  
  return (
    <PageLayout 
      title={`${keyword} - Salary Calculator`}
      description={`Calculate how much $${hourlyRate}/hour equals per year. Free salary calculator with detailed breakdown.`}
      keyword={keyword}
    >
      <div className="max-w-4xl mx-auto">
        {/* Calculator Input */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Salary Calculator</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Hourly Rate ($)</label>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="200"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Hours per Week</label>
              <input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="80"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Weeks per Year</label>
              <input
                type="number"
                value={weeksPerYear}
                onChange={(e) => setWeeksPerYear(Number(e.target.value))}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                min="1"
                max="52"
              />
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Annual Salary</h3>
            <p className="text-3xl font-bold">${annualSalary.toLocaleString()}</p>
            <p className="text-blue-100 text-sm">Before taxes</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Monthly Salary</h3>
            <p className="text-3xl font-bold">${monthlySalary.toLocaleString()}</p>
            <p className="text-green-100 text-sm">Before taxes</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Weekly Salary</h3>
            <p className="text-3xl font-bold">${weeklySalary.toLocaleString()}</p>
            <p className="text-purple-100 text-sm">Before taxes</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Biweekly Salary</h3>
            <p className="text-3xl font-bold">${biweeklySalary.toLocaleString()}</p>
            <p className="text-orange-100 text-sm">Before taxes</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">Daily Salary</h3>
            <p className="text-3xl font-bold">${dailySalary.toLocaleString()}</p>
            <p className="text-red-100 text-sm">Before taxes</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-600 to-gray-700 text-white rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2">After Tax Annual</h3>
            <p className="text-3xl font-bold">${afterTaxAnnual.toLocaleString()}</p>
            <p className="text-gray-300 text-sm">Est. 22% tax rate</p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-4">Salary Breakdown</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-2">Period</th>
                  <th className="pb-2">Before Taxes</th>
                  <th className="pb-2">After Taxes (Est.)</th>
                </tr>
              </thead>
              <tbody className="space-y-2">
                <tr className="border-b">
                  <td className="py-2 font-medium">Hourly</td>
                  <td className="py-2">${hourlyRate.toFixed(2)}</td>
                  <td className="py-2">${(hourlyRate * (1 - estimatedTaxRate)).toFixed(2)}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Daily</td>
                  <td className="py-2">${dailySalary.toFixed(2)}</td>
                  <td className="py-2">${(dailySalary * (1 - estimatedTaxRate)).toFixed(2)}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Weekly</td>
                  <td className="py-2">${weeklySalary.toFixed(2)}</td>
                  <td className="py-2">${(weeklySalary * (1 - estimatedTaxRate)).toFixed(2)}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Biweekly</td>
                  <td className="py-2">${biweeklySalary.toFixed(2)}</td>
                  <td className="py-2">${(biweeklySalary * (1 - estimatedTaxRate)).toFixed(2)}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2 font-medium">Monthly</td>
                  <td className="py-2">${monthlySalary.toFixed(2)}</td>
                  <td className="py-2">${afterTaxMonthly.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium">Annual</td>
                  <td className="py-2">${annualSalary.toFixed(2)}</td>
                  <td className="py-2">${afterTaxAnnual.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Reference */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Quick Hourly Rate Reference</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[15, 20, 25, 30, 35, 40, 45, 50].map(rate => (
              <div key={rate} className="text-center p-3 bg-gray-50 rounded-lg">
                <div className="font-bold text-lg">${rate}/hr</div>
                <div className="text-sm text-gray-600">
                  ${(rate * 40 * 52).toLocaleString()}/year
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SEO Content */}
        <div className="mt-12 prose max-w-none">
          <h2>How to Calculate {keyword}</h2>
          <p>
            Our free salary calculator helps you convert hourly wages to annual salaries instantly. 
            Simply enter your hourly rate and working hours to see your potential yearly earnings.
          </p>
          
          <h3>Calculation Formula:</h3>
          <p>Annual Salary = Hourly Rate × Hours per Week × Weeks per Year</p>
          <p>For a standard full-time job: Annual Salary = Hourly Rate × 40 × 52</p>
          
          <h3>Common Hourly Rates:</h3>
          <ul>
            <li>$15/hour = $31,200/year (minimum wage in many states)</li>
            <li>$20/hour = $41,600/year (entry-level professional)</li>
            <li>$25/hour = $52,000/year (skilled worker)</li>
            <li>$30/hour = $62,400/year (experienced professional)</li>
            <li>$40/hour = $83,200/year (senior professional)</li>
            <li>$50/hour = $104,000/year (specialist/consultant)</li>
          </ul>
          
          <h3>Important Considerations:</h3>
          <ul>
            <li>These calculations are before taxes and deductions</li>
            <li>Actual take-home pay will be lower due to taxes</li>
            <li>Benefits and bonuses are not included</li>
            <li>Part-time workers may work fewer hours</li>
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}