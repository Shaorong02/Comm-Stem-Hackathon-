// Animal data with extinction year predictions
const animals = [
    {
        id: 1,
        name: "Amur Leopard",
        status: "Critically Endangered",
        population: "84",
        facts: "One of the world's most endangered big cats, with less than 100 individuals remaining in the wild.",
        details: "The Amur leopard is a leopard subspecies native to the Primorye region of southeastern Russia and northern China. It is listed as Critically Endangered on the IUCN Red List, as the wild population is estimated at less than 100 individuals.",
        extinctionYear: 2035,
        habitat: "Temperate Forests",
        threat: "Habitat Loss, Poaching",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "35%", left: "30%" }
    },
    {
        id: 2,
        name: "Sumatran Elephant",
        status: "Critically Endangered",
        population: "2,400-2,800",
        facts: "Has lost 70% of its habitat in the last 25 years due to deforestation for palm oil plantations.",
        details: "The Sumatran elephant has been listed as Critically Endangered by IUCN since 2011. The population has declined by at least 80% over the last three generations, estimated to be about 75 years. The most urgent threat is habitat loss and fragmentation.",
        extinctionYear: 2045,
        habitat: "Tropical Forests",
        threat: "Deforestation, Human Conflict",
        image: "https://images.unsplash.com/photo-1551126850-5c2e0f5db2da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "45%", left: "60%" }
    },
    {
        id: 3,
        name: "Mountain Gorilla",
        status: "Endangered",
        population: "1,063",
        facts: "There are only about 1,000 mountain gorillas left in the wild, but conservation efforts are helping.",
        details: "Mountain gorillas are a subspecies of the eastern gorilla. They face threats from habitat loss, poaching, and human diseases. Conservation efforts have seen their numbers slowly increase in recent years.",
        extinctionYear: 2060,
        habitat: "Montane Forests",
        threat: "Habitat Loss, Poaching",
        image: "https://images.unsplash.com/photo-1554941066-7ec38167372e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "55%", left: "40%" }
    },
    {
        id: 4,
        name: "Hawksbill Turtle",
        status: "Critically Endangered",
        population: "Unknown",
        facts: "Sought after for their beautiful shells, they are critically endangered due to wildlife trade.",
        details: "Hawksbill turtles are found throughout the world's tropical oceans, predominantly in coral reefs. They are threatened by loss of nesting and feeding habitats, excessive egg collection, fishery-related mortality, pollution, and coastal development.",
        extinctionYear: 2040,
        habitat: "Coral Reefs",
        threat: "Poaching, Climate Change",
        image: "https://images.unsplash.com/photo-1599021435004-0e51f5ab5aef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "65%", left: "70%" }
    },
    {
        id: 5,
        name: "Sumatran Orangutan",
        status: "Critically Endangered",
        population: "14,613",
        facts: "Lost 60% of its habitat between 1985 and 2007 due to oil palm cultivation and other agriculture.",
        details: "The Sumatran orangutan is one of the three species of orangutans. Found only on the island of Sumatra in Indonesia, it is rarer than the Bornean orangutan. Its population has declined by about 80% in the last 75 years.",
        extinctionYear: 2038,
        habitat: "Tropical Rainforests",
        threat: "Deforestation, Poaching",
        image: "https://images.unsplash.com/photo-153132789919-db9c9cad7d7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "25%", left: "50%" }
    },
    {
        id: 6,
        name: "Vaquita",
        status: "Critically Endangered",
        population: "10",
        facts: "The world's most endangered marine mammal, with only about 10 individuals remaining.",
        details: "The vaquita is a species of porpoise endemic to the northern part of the Gulf of California. The population has dropped drastically in recent years due to bycatch in illegal gillnets used for fishing another endangered species, the totoaba fish.",
        extinctionYear: 2025,
        habitat: "Marine",
        threat: "Bycatch, Illegal Fishing",
        image: "https://images.unsplash.com/photo-1589550016462-5debf5ba3a7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "75%", left: "30%" }
    },
    {
        id: 7,
        name: "Javan Rhino",
        status: "Critically Endangered",
        population: "74",
        facts: "One of the most endangered large mammals with only one known population in the wild.",
        details: "The Javan rhinoceros is one of the most endangered large mammal species in the world. They once roamed throughout Northeast India and Southeast Asia. Today, only one population remains in Ujung Kulon National Park in Java, Indonesia.",
        extinctionYear: 2030,
        habitat: "Tropical Forests",
        threat: "Poaching, Disease",
        image: "https://images.unsplash.com/photo-1619115446266-f2bcead1e7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "50%", left: "20%" }
    },
    {
        id: 8,
        name: "Snow Leopard",
        status: "Vulnerable",
        population: "4,000-6,500",
        facts: "Elusive big cats native to the mountain ranges of Central and South Asia.",
        details: "Snow leopards are perfectly adapted to the cold, rugged mountain terrain. Their numbers have been declining due to habitat loss, poaching, and climate change affecting their high-altitude ecosystems.",
        extinctionYear: 2070,
        habitat: "Alpine Regions",
        threat: "Poaching, Climate Change",
        image: "https://images.unsplash.com/photo-1517166988974-5b7fbe0ebd53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "20%", left: "75%" }
    },
    {
        id: 9,
        name: "Blue Whale",
        status: "Endangered",
        population: "10,000-25,000",
        facts: "The largest animal ever known to have existed on Earth.",
        details: "Blue whales were nearly driven to extinction by whaling until the international community granted them protection in 1966. They currently face threats from ship strikes, entanglement in fishing gear, and the impacts of climate change on their food sources.",
        extinctionYear: 2080,
        habitat: "Oceans",
        threat: "Ship Strikes, Climate Change",
        image: "https://images.unsplash.com/photo-1560271787-2e5d5e63cfa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        position: { top: "70%", left: "80%" }
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const networkContainer = document.querySelector('.network-container');
    const yearSlider = document.getElementById('yearSlider');
    const currentYearSpan = document.getElementById('currentYear');
    const modalOverlay = document.getElementById('modalOverlay');
    const closeModal = document.getElementById('closeModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');
    const modalStatus = document.getElementById('modalStatus');
    const modalPopulation = document.getElementById('modalPopulation');
    const modalHabitat = document.getElementById('modalHabitat');
    const modalThreat = document.getElementById('modalThreat');
    const modalExtinctionYear = document.getElementById('modalExtinctionYear');
    
    // Create mycelial network canvas
    const canvas = document.getElementById('mycelial-canvas');
    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
        canvas.width = networkContainer.offsetWidth;
        canvas.height = networkContainer.offsetHeight;
        drawTreeNetwork();
    }
    
    // Draw the tree-like network
    function drawTreeNetwork() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw trunk
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, canvas.height);
        ctx.lineTo(canvas.width / 2, canvas.height - 150);
        ctx.lineWidth = 30;
        ctx.strokeStyle = '#5D4037';
        ctx.stroke();
        
        // Draw main branches
        drawBranch(canvas.width / 2, canvas.height - 150, -Math.PI/4, 100, 20);
        drawBranch(canvas.width / 2, canvas.height - 150, Math.PI/4, 100, 20);
        drawBranch(canvas.width / 2, canvas.height - 180, -Math.PI/6, 120, 18);
        drawBranch(canvas.width / 2, canvas.height - 180, Math.PI/6, 120, 18);
        
        // Draw smaller branches
        drawBranch(canvas.width / 2 - 70, canvas.height - 220, -Math.PI/3, 80, 12);
        drawBranch(canvas.width / 2 + 70, canvas.height - 220, Math.PI/3, 80, 12);
        drawBranch(canvas.width / 2 - 40, canvas.height - 250, -Math.PI/5, 60, 10);
        drawBranch(canvas.width / 2 + 40, canvas.height - 250, Math.PI/5, 60, 10);
        
        // Draw glow effects at connection points
        animals.forEach(animal => {
            const node = document.getElementById(`animal-${animal.id}`);
            if (node) {
                const rect = node.getBoundingClientRect();
                const containerRect = networkContainer.getBoundingClientRect();
                
                const x = rect.left + rect.width/2 - containerRect.left;
                const y = rect.top + rect.height/2 - containerRect.top;
                
                // Draw glow
                const gradient = ctx.createRadialGradient(x, y, 5, x, y, 25);
                
                // Set glow color based on status
                if (animal.status === "Critically Endangered") {
                    gradient.addColorStop(0, 'rgba(211, 47, 47, 0.5)');
                    gradient.addColorStop(1, 'rgba(211, 47, 47, 0)');
                } else if (animal.status === "Endangered") {
                    gradient.addColorStop(0, 'rgba(255, 152, 0, 0.5)');
                    gradient.addColorStop(1, 'rgba(255, 152, 0, 0)');
                } else {
                    gradient.addColorStop(0, 'rgba(76, 175, 80, 0.5)');
                    gradient.addColorStop(1, 'rgba(76, 175, 80, 0)');
                }
                
                ctx.beginPath();
                ctx.arc(x, y, 25, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        });
    }
    
    // Recursive function to draw tree branches
    function drawBranch(startX, startY, angle, length, width) {
        ctx.beginPath();
        ctx.save();
        
        ctx.translate(startX, startY);
        ctx.rotate(angle);
        ctx.moveTo(0, 0);
        ctx.lineTo(0, -length);
        
        ctx.lineWidth = width;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#5D4037';
        ctx.stroke();
        
        if (length < 10) {
            ctx.restore();
            return;
        }
        
        // Draw sub-branches
        drawBranch(0, -length, -Math.PI/8, length * 0.8, width * 0.7);
        drawBranch(0, -length, Math.PI/8, length * 0.8, width * 0.7);
        
        ctx.restore();
    }
    
    // Create animal nodes
    animals.forEach(animal => {
        const node = document.createElement('div');
        node.className = `animal-node ${animal.status.toLowerCase().replace(' ', '-')}`;
        node.id = `animal-${animal.id}`;
        node.style.top = animal.position.top;
        node.style.left = animal.position.left;
        
        // Create info tooltip
        const info = document.createElement('div');
        info.className = 'animal-info';
        info.id = `info-${animal.id}`;
        info.innerHTML = `
            <h3>${animal.name}</h3>
            <p>${animal.facts}</p>
            <p>Population: ${animal.population}</p>
            <span class="status status-${animal.status.toLowerCase().replace(' ', '-')}">${animal.status}</span>
        `;
        
        networkContainer.appendChild(node);
        networkContainer.appendChild(info);
        
        // Add event listeners for hover
        node.addEventListener('mouseenter', function() {
            const infoElement = document.getElementById(`info-${animal.id}`);
            infoElement.style.display = 'block';
            infoElement.style.top = (parseInt(animal.position.top.replace('%', '')) - 15) + '%';
            infoElement.style.left = (parseInt(animal.position.left.replace('%', '')) + 5) + '%';
            
            // Highlight connections
            drawTreeNetwork();
        });
        
        node.addEventListener('mouseleave', function() {
            document.getElementById(`info-${animal.id}`).style.display = 'none';
            
            // Redraw normal network
            drawTreeNetwork();
        });
        
        // Add click event for modal popup
        node.addEventListener('click', function() {
            // Populate modal with animal data
            modalTitle.textContent = animal.name;
            modalImage.src = animal.image;
            modalImage.alt = animal.name;
            modalDescription.textContent = animal.details;
            modalStatus.textContent = animal.status;
            modalPopulation.textContent = animal.population;
            modalHabitat.textContent = animal.habitat;
            modalThreat.textContent = animal.threat;
            modalExtinctionYear.textContent = animal.extinctionYear;
            
            // Show modal
            modalOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        });
    });
    
    // Close modal functionality
    closeModal.addEventListener('click', function() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scrolling
    });
    
    // Close modal when clicking outside
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
            document.body.style.overflow = ''; // Re-enable scrolling
        }
    });
    
    // Update year display and check for extinctions
    yearSlider.addEventListener('input', function() {
        const year = parseInt(this.value);
        currentYearSpan.textContent = year;
        
        animals.forEach(animal => {
            const node = document.getElementById(`animal-${animal.id}`);
            if (year >= animal.extinctionYear && !node.classList.contains('disappearing')) {
                node.classList.add('disappearing');
            } else if (year < animal.extinctionYear && node.classList.contains('disappearing')) {
                node.classList.remove('disappearing');
            }
        });
        
        // Redraw network with updated connections
        drawTreeNetwork();
    });
    
    // Initialize canvas and network
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Add subtle animation to the network
    setInterval(drawTreeNetwork, 3000);
});