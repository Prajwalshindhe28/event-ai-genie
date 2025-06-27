// Mock Data for Vendors
const vendorsData = [
    // Wedding Vendors
    {
        name: "Royal Palace Banquets",
        type: "Venue",
        eventTypes: ["wedding"],
        location: "bangalore",
        baseCost: 150000,
        rating: 4.8,
        capacity: 300
    },
    {
        name: "Elegant Catering Co.",
        type: "Catering",
        eventTypes: ["wedding", "party"],
        location: "bangalore",
        baseCost: 800,
        rating: 4.6,
        capacity: 500
    },
    {
        name: "Dream Decorators",
        type: "Decoration",
        eventTypes: ["wedding", "party"],
        location: "bangalore",
        baseCost: 75000,
        rating: 4.7,
        capacity: 400
    },
    {
        name: "Melody Musicians",
        type: "Entertainment",
        eventTypes: ["wedding", "party"],
        location: "bangalore",
        baseCost: 45000,
        rating: 4.5,
        capacity: 200
    },
    {
        name: "Grand Taj Venues",
        type: "Venue",
        eventTypes: ["wedding"],
        location: "mumbai",
        baseCost: 200000,
        rating: 4.9,
        capacity: 400
    },
    {
        name: "Mumbai Feast Caterers",
        type: "Catering",
        eventTypes: ["wedding", "party"],
        location: "mumbai",
        baseCost: 900,
        rating: 4.7,
        capacity: 600
    },
    {
        name: "Bollywood Decorators",
        type: "Decoration",
        eventTypes: ["wedding", "party"],
        location: "mumbai",
        baseCost: 85000,
        rating: 4.8,
        capacity: 500
    },
    {
        name: "Star Entertainment",
        type: "Entertainment",
        eventTypes: ["wedding", "party"],
        location: "mumbai",
        baseCost: 55000,
        rating: 4.6,
        capacity: 300
    },
    
    // Party Vendors
    {
        name: "Party Paradise Halls",
        type: "Venue",
        eventTypes: ["party"],
        location: "bangalore",
        baseCost: 25000,
        rating: 4.4,
        capacity: 150
    },
    {
        name: "Celebration Caterers",
        type: "Catering",
        eventTypes: ["party"],
        location: "bangalore",
        baseCost: 500,
        rating: 4.3,
        capacity: 200
    },
    {
        name: "Fun Decorations",
        type: "Decoration",
        eventTypes: ["party"],
        location: "bangalore",
        baseCost: 15000,
        rating: 4.2,
        capacity: 100
    },
    {
        name: "DJ Beats",
        type: "Entertainment",
        eventTypes: ["party"],
        location: "bangalore",
        baseCost: 12000,
        rating: 4.4,
        capacity: 150
    },
    {
        name: "Mumbai Party Hub",
        type: "Venue",
        eventTypes: ["party"],
        location: "mumbai",
        baseCost: 35000,
        rating: 4.5,
        capacity: 200
    },
    {
        name: "Tasty Bites Catering",
        type: "Catering",
        eventTypes: ["party"],
        location: "mumbai",
        baseCost: 600,
        rating: 4.4,
        capacity: 250
    },
    
    // Conference Vendors
    {
        name: "Tech Conference Center",
        type: "Venue",
        eventTypes: ["conference"],
        location: "bangalore",
        baseCost: 50000,
        rating: 4.6,
        capacity: 500
    },
    {
        name: "Business Catering Solutions",
        type: "Catering",
        eventTypes: ["conference"],
        location: "bangalore",
        baseCost: 300,
        rating: 4.5,
        capacity: 1000
    },
    {
        name: "AV Tech Solutions",
        type: "Technology",
        eventTypes: ["conference"],
        location: "bangalore",
        baseCost: 25000,
        rating: 4.7,
        capacity: 800
    },
    {
        name: "Professional Speakers Bureau",
        type: "Entertainment",
        eventTypes: ["conference"],
        location: "bangalore",
        baseCost: 75000,
        rating: 4.8,
        capacity: 1000
    },
    {
        name: "Mumbai Convention Center",
        type: "Venue",
        eventTypes: ["conference"],
        location: "mumbai",
        baseCost: 75000,
        rating: 4.7,
        capacity: 800
    },
    {
        name: "Corporate Catering Mumbai",
        type: "Catering",
        eventTypes: ["conference"],
        location: "mumbai",
        baseCost: 350,
        rating: 4.6,
        capacity: 1200
    }
];

// Timeline templates for different event types
const timelineTemplates = {
    wedding: [
        { step: "Book Venue & Send Invitations", description: "Secure your dream venue and send out invitations" },
        { step: "Finalize Catering & Menu", description: "Choose catering service and finalize the menu" },
        { step: "Arrange Decorations & Photography", description: "Set up decorations and book photography services" },
        { step: "Entertainment & Final Preparations", description: "Confirm entertainment and complete final preparations" }
    ],
    party: [
        { step: "Reserve Party Venue", description: "Book the perfect venue for your celebration" },
        { step: "Plan Food & Beverages", description: "Organize catering and beverage arrangements" },
        { step: "Set Up Decorations & Music", description: "Arrange decorations and entertainment setup" },
        { step: "Final Guest Coordination", description: "Confirm guest list and final event details" }
    ],
    conference: [
        { step: "Book Conference Venue & AV Setup", description: "Secure venue and arrange audio-visual equipment" },
        { step: "Confirm Speakers & Agenda", description: "Finalize speaker lineup and event schedule" },
        { step: "Arrange Catering & Materials", description: "Organize meals and prepare conference materials" },
        { step: "Registration & Event Execution", description: "Set up registration and execute the event" }
    ]
};

// Budget allocation percentages by event type
const budgetAllocations = {
    wedding: {
        "Venue": 0.35,
        "Catering": 0.30,
        "Decoration": 0.20,
        "Entertainment": 0.15
    },
    party: {
        "Venue": 0.30,
        "Catering": 0.35,
        "Decoration": 0.20,
        "Entertainment": 0.15
    },
    conference: {
        "Venue": 0.40,
        "Catering": 0.20,
        "Technology": 0.25,
        "Entertainment": 0.15
    }
};

// DOM Elements
const eventForm = document.getElementById('eventForm');
const resultsSection = document.getElementById('resultsSection');
const vendorsContainer = document.getElementById('vendorsContainer');
const timelineContainer = document.getElementById('timelineContainer');
const budgetContainer = document.getElementById('budgetContainer');

// Event listener for form submission
eventForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(eventForm);
    const eventData = {
        eventType: formData.get('eventType'),
        location: formData.get('location'),
        budget: parseInt(formData.get('budget')),
        guests: parseInt(formData.get('guests'))
    };
    
    generateEventPlan(eventData);
});

// Main function to generate event plan
function generateEventPlan(eventData) {
    const { eventType, location, budget, guests } = eventData;
    
    // Filter and score vendors
    const recommendedVendors = getRecommendedVendors(eventType, location, guests);
    
    // Generate timeline
    const timeline = generateTimeline(eventType);
    
    // Calculate budget breakdown
    const budgetBreakdown = calculateBudgetBreakdown(eventType, budget, recommendedVendors, guests);
    
    // Display results
    displayVendors(recommendedVendors);
    displayTimeline(timeline);
    displayBudgetSummary(budgetBreakdown, budget);
    
    // Show results section
    resultsSection.classList.remove('hidden');
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Function to get recommended vendors
function getRecommendedVendors(eventType, location, guests) {
    console.log('Filtering vendors for:', { eventType, location, guests });
    
    // Filter vendors by event type and location (relaxed capacity filter)
    const filteredVendors = vendorsData.filter(vendor => {
        const eventMatch = vendor.eventTypes.includes(eventType);
        const locationMatch = vendor.location === location;
        const capacityMatch = vendor.capacity >= guests * 0.8; // More flexible capacity matching
        
        console.log(`${vendor.name}: event=${eventMatch}, location=${locationMatch}, capacity=${capacityMatch}`);
        
        return eventMatch && locationMatch && capacityMatch;
    });
    
    console.log('Filtered vendors:', filteredVendors);
    
    // If no vendors found, get vendors for the location regardless of capacity
    if (filteredVendors.length === 0) {
        const relaxedVendors = vendorsData.filter(vendor => 
            vendor.eventTypes.includes(eventType) && vendor.location === location
        );
        console.log('Using relaxed filtering:', relaxedVendors);
        
        if (relaxedVendors.length > 0) {
            return relaxedVendors.slice(0, 4).map(vendor => ({
                ...vendor,
                calculatedCost: vendor.type === 'Catering' ? vendor.baseCost * guests : vendor.baseCost,
                score: vendor.rating / 5
            }));
        }
    }
    
    // Score vendors based on rating and capacity match
    const scoredVendors = filteredVendors.map(vendor => {
        const capacityScore = Math.max(0.3, 1 - Math.abs(vendor.capacity - guests) / vendor.capacity);
        const ratingScore = vendor.rating / 5;
        const totalScore = (capacityScore * 0.4) + (ratingScore * 0.6);
        
        return {
            ...vendor,
            score: totalScore,
            calculatedCost: vendor.type === 'Catering' ? vendor.baseCost * guests : vendor.baseCost
        };
    });
    
    // Sort by score and return top 4
    const result = scoredVendors
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);
    
    console.log('Final recommended vendors:', result);
    return result;
}

// Function to generate timeline
function generateTimeline(eventType) {
    return timelineTemplates[eventType] || timelineTemplates.party;
}

// Function to calculate budget breakdown
function calculateBudgetBreakdown(eventType, totalBudget, vendors, guests) {
    const allocation = budgetAllocations[eventType];
    const breakdown = {};
    let totalCost = 0;
    
    // Calculate costs based on recommended vendors
    vendors.forEach(vendor => {
        const category = vendor.type;
        const cost = vendor.calculatedCost;
        
        if (!breakdown[category]) {
            breakdown[category] = 0;
        }
        breakdown[category] += cost;
        totalCost += cost;
    });
    
    // Fill in missing categories with estimated costs
    Object.keys(allocation).forEach(category => {
        if (!breakdown[category]) {
            breakdown[category] = Math.round(totalBudget * allocation[category]);
            totalCost += breakdown[category];
        }
    });
    
    return {
        breakdown,
        totalCost,
        remaining: totalBudget - totalCost,
        isOverBudget: totalCost > totalBudget
    };
}

// Function to display vendors
function displayVendors(vendors) {
    console.log('Displaying vendors:', vendors);
    vendorsContainer.innerHTML = '';
    
    if (vendors.length === 0) {
        vendorsContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">
                <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 1rem; color: #f59e0b;"></i>
                <h3>No vendors found</h3>
                <p>Try adjusting your event type, location, or guest count.</p>
            </div>
        `;
        return;
    }
    
    vendors.forEach(vendor => {
        const vendorCard = document.createElement('div');
        vendorCard.className = 'vendor-card';
        
        const stars = '★'.repeat(Math.floor(vendor.rating)) + (vendor.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(Math.floor(5 - vendor.rating));
        
        vendorCard.innerHTML = `
            <div class="vendor-header">
                <div class="vendor-name">${vendor.name}</div>
                <div class="vendor-rating">
                    <span style="color: #f59e0b;">${'★'.repeat(Math.floor(vendor.rating))}${'☆'.repeat(5 - Math.floor(vendor.rating))}</span>
                    <span>${vendor.rating}</span>
                </div>
            </div>
            <div class="vendor-type">${vendor.type}</div>
            <div class="vendor-details">
                <div class="vendor-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${vendor.location.charAt(0).toUpperCase() + vendor.location.slice(1)}
                </div>
                <div class="vendor-cost">₹${vendor.calculatedCost.toLocaleString()}</div>
            </div>
        `;
        
        vendorsContainer.appendChild(vendorCard);
    });
}

// Function to display timeline
function displayTimeline(timeline) {
    timelineContainer.innerHTML = '';
    
    timeline.forEach((step, index) => {
        const timelineStep = document.createElement('div');
        timelineStep.className = 'timeline-step';
        
        timelineStep.innerHTML = `
            <div class="step-number">${index + 1}</div>
            <div class="step-content">
                <h4>${step.step}</h4>
                <p>${step.description}</p>
            </div>
        `;
        
        timelineContainer.appendChild(timelineStep);
    });
}

// Function to display budget summary
function displayBudgetSummary(budgetData, totalBudget) {
    budgetContainer.innerHTML = '';
    
    // Display budget breakdown
    Object.entries(budgetData.breakdown).forEach(([category, amount]) => {
        const budgetItem = document.createElement('div');
        budgetItem.className = 'budget-item';
        
        budgetItem.innerHTML = `
            <div class="budget-category">${category}</div>
            <div class="budget-amount">₹${amount.toLocaleString()}</div>
        `;
        
        budgetContainer.appendChild(budgetItem);
    });
    
    // Display total
    const totalItem = document.createElement('div');
    totalItem.className = 'budget-item budget-total';
    totalItem.innerHTML = `
        <div class="budget-category">Total Estimated Cost</div>
        <div class="budget-amount">₹${budgetData.totalCost.toLocaleString()}</div>
    `;
    budgetContainer.appendChild(totalItem);
    
    // Display budget status
    const statusDiv = document.createElement('div');
    statusDiv.className = `budget-status ${budgetData.isOverBudget ? 'budget-over' : 'budget-under'}`;
    
    if (budgetData.isOverBudget) {
        const overAmount = budgetData.totalCost - totalBudget;
        statusDiv.innerHTML = `
            <i class="fas fa-exclamation-triangle"></i>
            Over Budget by ₹${overAmount.toLocaleString()}
        `;
    } else {
        statusDiv.innerHTML = `
            <i class="fas fa-check-circle"></i>
            Within Budget! Remaining: ₹${budgetData.remaining.toLocaleString()}
        `;
    }
    
    budgetContainer.appendChild(statusDiv);
}

// Add some smooth animations when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation to form
    const formCard = document.querySelector('.form-card');
    formCard.style.opacity = '0';
    formCard.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        formCard.style.transition = 'all 0.8s ease';
        formCard.style.opacity = '1';
        formCard.style.transform = 'translateY(0)';
    }, 300);
});