import React from 'react'
import Onerow from './Onerow'
import '../styles/content.css'

export default function Content() {
  return (
    <div>
        {/* <h1 className="heading">Ear, Nose, Throat Problems</h1>
        <hr /> */}
        <Onerow />

        <div className="container" id="content">
        <div className="content">
          <h1>How do I know if I’m sick?</h1>
          <div className="text">
            <p>
              Using an online symptom checker is simple. For instance, you might be a 45 year old woman from the UK who is currently experiencing headache, a fever and a sore throat.
            </p>
            <p> 
              Inputting this information into the symptom checker will give you some likely ‘common’ diagnoses. These include: strep throat, tonsillitis, sinusitis and flu.
            </p>
            <p>
              But the self-diagnosis calculator will also give a list of rarer but more serious diagnoses in a tab called ‘red flags’. Here you’ll find links to our patient information leaflets about much less common conditions, such as temporal arteritis, meningitis and toxic shock syndrome. If, after reading the information, you think one of these serious conditions could apply to you, you should seek medical advice immediately.
            </p>
          </div>
        </div>

        <div className="content">
          <h1>What’s the difference between a sign and a symptom?</h1>
          <div className="text">
            <p>
              ‘Sign’ and ‘symptom’ are often used interchangeably, but if we’re going to be pedantic, they do actually mean different things.
            </p>
            <p> 
              If you’re feeling ill it might not be immediately obvious to somebody looking at you that you’re sick. For instance, if you’re experiencing pain, fatigue or dizziness, only you know what that feels like. These are symptoms - which can only be described by the person experiencing them.
            </p>
            <p>
              Signs, on the other hand, can be observed by an outsider too. For example, indicators to other people that you’re unwell, such as: sweating, sneezing or looking pale. Or, things that can be measured, such as a high blood pressure reading or a fever determined with a thermometer, count as signs.
            </p>
          </div>
        </div>

        <div className="content">
          <h1>How safe and accurate are symptom checkers?</h1>
          <div className="text">
            <p>
              Most doctors agree that online symptom checkers are can encourage people with life-threatening symptoms to seek urgent attention, potentially saving lives. They’re also useful for reassuring patients who may have sought urgent care when they didn’t need to.
            </p>
            <p> 
              However, one study suggested that online symptom checkers tend to be over-cautious, which could lead to an increase in unnecessary appointments, rather than a reduction. Another piece of research from the United States found that doctors are twice as likely to make a correct diagnosis as online symptom checkers.
            </p>
            <p>
              While these self diagnosis tools can certainly be useful for determining whether a trip to hospital is necessary, they can’t match the expertise of an experienced health professional.
            </p>
          </div>
        </div>

        <div className="content">
          <h3>Disclaimer</h3>
          <div className="text">
            <p>
              This symptom checker is provided by netmeds Healthcare Limited. netmeds Symptom Checker ("netmeds") and any content accessed through netmeds is for informational purposes only, and is not intended to constitute professional medical advice, diagnosis or treatment. EMIS shall be in no way responsible for your use of netmeds, or any information that you obtain from netmeds. You acknowledge that when using netmeds you do so at your own choice and in agreement with this disclaimer. Do not ignore or delay obtaining professional medical advice because of information accessed through netmeds. Seek immediate medical assistance or call your doctor for all medical emergencies. By using netmeds you agree to the terms and conditions.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
