import { useState, useMemo } from 'react';

/**
 * MemoExample Component - Demonstrates useMemo hook
 * 
 * Learn:
 * - How to use useMemo to memoize expensive calculations
 * - When to use useMemo for performance optimization
 * - Understanding dependency arrays with useMemo
 * - Difference between useMemo and useCallback
 */

// Expensive function that we want to optimize
function findPrimes(max: number): number[] {
  console.log('🔢 Calculating primes...');
  const primes: number[] = [];
  
  for (let num = 2; num <= max; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  
  return primes;
}

function MemoExample() {
  const [maxNumber, setMaxNumber] = useState(100);
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  // WITHOUT useMemo: This would recalculate on EVERY render
  // (even when darkMode or searchTerm changes)
  // const primes = findPrimes(maxNumber);

  // WITH useMemo: Only recalculates when maxNumber changes
  const primes = useMemo(() => {
    return findPrimes(maxNumber);
  }, [maxNumber]); // Only recalculate when maxNumber changes

  // Filter primes based on search term (also memoized)
  const filteredPrimes = useMemo(() => {
    console.log('🔍 Filtering primes...');
    if (!searchTerm) return primes;
    return primes.filter((prime) => prime.toString().includes(searchTerm));
  }, [primes, searchTerm]);

  return (
    <div
      style={{
        padding: '20px',
        border: '2px solid #eb2f96',
        borderRadius: '8px',
        margin: '10px',
        backgroundColor: darkMode ? '#1a1a1a' : 'white',
        color: darkMode ? 'white' : 'black',
      }}
    >
      <h2>useMemo Example - Prime Numbers</h2>
      <p style={{ fontSize: '14px', color: darkMode ? '#aaa' : '#666' }}>
        useMemo memoizes expensive calculations, only recalculating when dependencies change.
      </p>

      {/* Controls */}
      <div style={{ marginTop: '15px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Max Number: {maxNumber}
          </label>
          <input
            type="range"
            min="10"
            max="1000"
            value={maxNumber}
            onChange={(e) => setMaxNumber(Number(e.target.value))}
            style={{ width: '200px' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Search Primes:
          </label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="e.g., 7"
            style={{
              padding: '8px',
              border: '1px solid #d9d9d9',
              borderRadius: '4px',
            }}
          />
        </div>

        <div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              padding: '8px 15px',
              backgroundColor: darkMode ? '#fff' : '#000',
              color: darkMode ? '#000' : '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '20px',
            }}
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>

      {/* Results */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: darkMode ? '#2a2a2a' : '#f0f0f0',
          borderRadius: '4px',
        }}
      >
        <p>
          <strong>Found {filteredPrimes.length} prime numbers</strong>
          {searchTerm && ` containing "${searchTerm}"`}
        </p>
        <div
          style={{
            maxHeight: '150px',
            overflowY: 'auto',
            marginTop: '10px',
            padding: '10px',
            backgroundColor: darkMode ? '#1a1a1a' : 'white',
            borderRadius: '4px',
          }}
        >
          {filteredPrimes.join(', ')}
        </div>
      </div>

      {/* Info Box */}
      <div
        style={{
          marginTop: '20px',
          padding: '15px',
          backgroundColor: '#fff7e6',
          border: '1px solid #faad14',
          borderRadius: '4px',
          color: '#000',
        }}
      >
        <h4 style={{ marginTop: 0 }}>💡 What's Happening?</h4>
        <ul style={{ marginBottom: 0, paddingLeft: '20px' }}>
          <li>
            <strong>Toggle Dark Mode:</strong> Component re-renders but primes are NOT
            recalculated (useMemo optimization!)
          </li>
          <li>
            <strong>Change Max Number:</strong> Primes ARE recalculated because maxNumber
            is in the dependency array
          </li>
          <li>
            <strong>Search:</strong> Only filtering is recalculated, not the prime generation
          </li>
        </ul>
        <p style={{ marginTop: '10px', marginBottom: 0, fontSize: '12px' }}>
          Open the browser console to see when calculations occur!
        </p>
      </div>
    </div>
  );
}

export default MemoExample;
