//global function so they can be called by the HTML
let openOverlay;
let closeOverlay;

document.addEventListener("DOMContentLoaded", function () {
    // openOverlay defines in the global scope for access from HTML
    openOverlay = function(imageSrc, title) {
        const overlay = document.getElementById("full-overlay");
        const overlayImage = document.getElementById("overlay-image");
        const overlayText = document.getElementById("overlay-text");
        const overlayTitle = document.getElementById("overlay-title");

        // Reset previous classes
        overlay.className = "full-overlay"; 
        overlayImage.className = ""; 
        overlayText.className = ""; 

        // Get description and styles based on title
        let description = "";
        let overlayClass = "";  
        let imageClass = ""; 
        let textClass = "";  
        let displayTitle = title; 

        // 4 david heads
        if (title === "2024 Sticker") {
            displayTitle = "Pop Art TEDxCU Sticker"; 
            description = "This sticker design was created for the TEDxCU 2024 event, inspired by the 'Renaissance' theme. It features a modern reinterpretation of the iconic statue of David, reimagined through a pop art lens with vibrant, playful colorways.";
            overlayClass = "sticker-overlay"; 
            imageClass = "sticker-img img-overlay"; 
            textClass = "sticker-text"; 

        // poster "birth of venus"
        } else if (title === "2024 Poster 1") {
            displayTitle = "TEDxCU 2024 Event Poster 1";
            description = "This poster is one iteration created to communicate essential details for the TEDxCU 2024 event, such as the venue, ticket website, and campus sponsors. Inspired by the 'Renaissance' theme, the design deconstructs the word as it might appear in a dictionary, highlighting its varied meanings. The background showcases Botticelli's The Birth of Venus, celebrating this famous piece of art";
            overlayClass = "poster-overlay"; 
            imageClass = "poster-img img-overlay"; 
            textClass = "poster-text"; 

        // flower sticker
        } else if (title === "2024 Sticker/Logo") {
            displayTitle = "TEDxCU 2024 Logo/Sticker"
            description = "This design represents the final iteration of the logo for the TEDxCU 2024 event, reimagining the iconic TEDx 'X.' Drawing inspiration from florals painted during the Renaissance, I edited open-source Baroque and Renaissance floral artwork into an X shape, adding highlights and shadows to create a cohesive and dynamic design.";
            overlayClass = "logo-overlay"; 
            imageClass = "logo-img img-overlay"; 
            textClass = "logo-text"; 

        // poster of the sistine chapel 
        } else if(title === "2024 Poster 2") {
            displayTitle = "TEDxCU 2024 Event Poster"
            description = "This poster was one of the iterations I designed to convey key details for the TEDxCU 2024 event, including the venue, ticket website, and campus sponsors. Reflecting the 'Renaissance' theme, the design breaks down the word as it would appear in a dictionary, symbolizing its diverse interpretations. The background features an image of the Sistine Chapel, paying homage to one of the most iconic works of Renaissance art.";
            overlayClass = "poster-overlay"; 
            imageClass = "poster-img img-overlay"; 
            textClass = "poster-text"; 
        
        // illustrated anomaly logo
        } else if (title === "2025 Logo") {
            displayTitle = "Illustrated TEDxCU Logo";
            description = "Intended for the TEDxCU 2025 event and incorporating the 'Anomaly' theme through a strikingly disproportionate illustration that plays on the iconic TEDx 'X.' Collaborating closely with the Marketing Lead, I ensured the design aligned with brand guidelines and resonated with the target audience, creating a versatile visual for various marketing materials.";
            overlayClass = "anomaly_logo-overlay"; 
            imageClass = "anomaly_logo-img img-overlay"; 
            textClass = "anomaly_logo-text";
        
        // single david head 
        } else if(title === "2024 David Sticker"){
            displayTitle = "TEDxCU David Sticker";
            description = "This sticker design was created for the TEDxCU 2024 event, drawing inspiration from the 'Renaissance' theme. It features a modern reinterpretation of the iconic statue of David reminiscent of the Italian Renaissance, set against a TED-red background. The foreground design pays homage to Andy Warhol's pop art style, creating a bold and contemporary visual.";
            overlayClass = "david-overlay"; 
            imageClass = "david-img img-overlay"; 
            textClass = "david-text";
        
        // multiple itterations of logos
        } else if(title === "2025 Logos") {
            displayTitle = "Anomaly Logo Iterations";
            description = "For the TEDxCU 2025 event, I developed multiple iterations of simple vector logos in black and the iconic TED-red, drawing inspiration from the various interpretations of the theme 'Anomaly.' The aesthetic was influenced by the World Fair, which celebrated anomalies like outer space and flight. Using these concepts, I created logos featuring ringed planets forming the X and planes with jet streams shaping the X, reflecting the event's theme through dynamic and imaginative visuals.";
            overlayClass = "anamolylogos-overlay"; 
            imageClass = "anamolylogos-img img-overlay"; 
            textClass = "anamolylogos-text";
        
        // spray paint x logo
        } else if(title === "2024 Modern Logo") {
            displayTitle = "Spray Paint TEDx 2024 Logo";
            description = "I designed this piece for TEDxCU 2024, drawing inspiration from the theme of 'Renaissance'. Using simplified vector illustrations, I reimagined iconic Renaissance imagery, including the Statue of David. I incorporated a bold spray-paint X as a backdrop for both illustrations to infuse a contemporary twist.";
            overlayClass = "modern-overlay"; 
            imageClass = "modern-img img-overlay"; 
            textClass = "modern-text";
        
        // crewneck design
        } else if(title === "2024 Crewneck"){
            displayTitle = "TEDxCU Venus Sweatshirt";
            description = "This design was featured on the back of the staff sweatshirt for the TEDxCU 2024 event in the iconic TED-red. After exploring multiple iterations, I finalized this design for its ability to clearly communicate the 'Renaissance' theme. Inspired by Botticelli's The Birth of Venus, the visual is both recognizable and elegant, while maintaining a simplicity that ensures it isn't overwhelming.";
            overlayClass = "crewneck-overlay"; 
            imageClass = "crewneck-img img-overlay"; 
            textClass = "crewneck-text";
        
        // 3D illustrated 2025 logo
        } else if(title === "2025 3D Logo") {
            displayTitle = "Illustrated TEDx 2025 Logo"
            description = "This piece is one of several logo iterations I created for the TEDxCU 2025 event, inspired by the theme 'Anomaly.' Drawing from the theme, I reimagined the iconic TEDx 'X' as a 3D building, incorporating a minimalist illustration of a person walking out of a door. The design uses TED-red alongside colors from the event's marketing brand guide to ensure cohesion with the overall aesthetic.";
            overlayClass = "threeD-overlay"; 
            imageClass = "threeD-img img-overlay"; 
            textClass = "threeD-text";

        } else if (title === "BTU Sticker"){
            displayTitle = "BTU Sticker Submission"
            description = "I created this design for a sticker competition hosted by the 'Blow Things Up Lab,' a creative maker space accessible through my major, Creative Technology & Design. Inspired by the lab's iconic hazardous safety chart, I developed a distressed design resembling a vandalized road sign. The piece incorporates details like stickers, spray paint, erosion marks, and a 'Hello My Name Is' sticker featuring one of my major's nicknames in blocky graffiti-style text."
            overlayClass = "btu-overlay"; 
            imageClass = "btu-img img-overlay"; 
            textClass = "btu-text";
        }

        // Add new specific classes
        overlay.classList.add(overlayClass);
        overlayImage.classList.add(...imageClass.split(' '));
        overlayText.classList.add(textClass);

        overlayImage.src = imageSrc;
        overlayTitle.textContent = displayTitle;
        overlayText.textContent = description;
        overlay.classList.add("active");
    };

    // Define closeOverlay in the global scope for access from HTML
    closeOverlay = function() {
        document.getElementById("full-overlay").classList.remove("active");
    };

    // Add event listeners to portfolio items
    document.querySelectorAll(".portfolio-item").forEach(item => {
        item.addEventListener("click", function () {
            const imgSrc = this.querySelector("img").src;
            const overlayTitle = this.querySelector(".overlay-text").textContent;
            openOverlay(imgSrc, overlayTitle);
        });
    });

    // Add event listener to close button
    document.querySelector(".close-btn").addEventListener("click", closeOverlay);

    // LinkedIn button functionality
    const button = document.getElementById("imageButton");
    if (button) {
        button.addEventListener("click", function () {
            window.open("https://www.linkedin.com/in/tessa-marie-brown/", "_blank");
        });
    }
});