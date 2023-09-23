import { Application } from "@hotwired/stimulus"
import stimulus_reflex from "stimulus_reflex"

const application = Application.start()

// Configure Stimulus development experience
application.warnings = true
application.debug = false
window.Stimulus = application

stimulus_reflex.initialize(application, { isolate: true })

export { application }
