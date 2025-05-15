document.addEventListener('DOMContentLoaded', function() {
  // DOM element where the Timeline will be attached
  var container = document.getElementById('visualization');

  // Create data items
  var items = new vis.DataSet([
    {id: 1, content: 'Project Initiation', start: '2025-05-20', className: 'planning-phase'},
    {id: 2, content: 'SOC Platform Requirements Assessment', start: '2025-05-25', end: '2025-06-05', className: 'planning-phase'},
    {id: 3, content: 'CrowdStrike Falcon Integration', start: '2025-06-10', end: '2025-06-20', className: 'integration-phase'},
    {id: 4, content: 'Checkpoint Firewall Integration', start: '2025-06-15', end: '2025-06-25', className: 'integration-phase'},
    {id: 5, content: 'Office 365 Integration', start: '2025-06-20', end: '2025-07-01', className: 'integration-phase'},
    {id: 6, content: 'Windows Log Integration', start: '2025-06-25', end: '2025-07-10', className: 'integration-phase'},
    {id: 7, content: 'Training & Knowledge Transfer', start: '2025-07-15', end: '2025-07-25', className: 'training-phase'},
    {id: 8, content: 'Final Testing & Go-Live', start: '2025-07-30', className: 'deployment-phase'},
    {id: 9, content: 'Ongoing Support & Maintenance', start: '2025-08-01', end: '2030-07-31', className: 'support-phase'}
  ]);

  // Configuration
  var options = {
    height: '400px',
    margin: {
      item: 20
    },
    orientation: 'top',
    zoomable: true,
    horizontalScroll: true,
    snap: null,
    template: function(item) {
      return `<div class="timeline-item">
                <h3>${item.content}</h3>
                <div class="timeline-item-details" id="details-${item.id}"></div>
              </div>`;
    }
  };

  // Create the timeline
  var timeline = new vis.Timeline(container, items, options);
  
  // Add click event for items
  timeline.on('click', function(properties) {
    if (properties.item) {
      showDetails(properties.item);
    }
  });
  
  function showDetails(itemId) {
    // Detailed information for each phase
    const details = {
      1: "Initial project planning, scope definition, and kickoff meeting with County IT.",
      2: "Assessment of existing security infrastructure and defining integration requirements.",
      3: "Setting up CrowdStrike Falcon alert integration with Cyrebro platform.",
      4: "Configuring Checkpoint firewall log forwarding to Cyrebro platform.",
      5: "Implementing Office 365 (Entra ID & Outlook) security monitoring.",
      6: "Setting up Windows security event log collection from workstations, servers, and AD.",
      7: "Training County IT personnel on dashboard usage and response procedures.",
      8: "Comprehensive testing, validation, and production deployment.",
      9: "Ongoing support, maintenance, and security optimization services."
    };
    
    // Update all detail sections
    Object.keys(details).forEach(id => {
      const detailElement = document.getElementById(`details-${id}`);
      if (detailElement) {
        if (id == itemId) {
          detailElement.innerHTML = details[id];
          detailElement.style.display = 'block';
        } else {
          detailElement.style.display = 'none';
        }
      }
    });
  }
});
