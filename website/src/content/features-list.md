## Core Features (Alpha)

### AI Onboarding Page
For firsttime users of the app on onboarding page is added to explain the AI features.

<img 
  src="/topnoch.github.io/Onboarding.png" 
  alt="Onboarding.png" 
  width="450" 
/>

### Wake Word activation
The AI overlay can be brought up from anywhere in the app (except login/onboarding) by saying the words "Hey NOCH."

### AI button
In a couple of places throughout the app you can find the AI icon that will open up the AI overlay.

<img 
  src="/topnoch.github.io/AiIcon.png" 
  alt="AiIcon.png" 
  width="450" 
/>

### AI overlay
The AI overlay is the main point of communication with the AI. This is where you can enter text prompts or tap the microphone to speak a prompt to the AI. You can also access AI setting through the gear icon.
- Text Prompts
- Speech to Text Prompts

<img 
  src="/topnoch.github.io/AiOverlay.png" 
  alt="AiOverlay.png" 
  width="450" 
/>

### AI behaviors.
The AI has a few behaviors implemented with more to come.
Current behaviors include.
- Explaining the AI functionalities.
- Routing the user to different parts of the app.
- Finding restraunts. (limited to only a few restraunts at this time.)

### AI Settings
AI Settings can access by the user through the AI overlay and through the user profile. Note that some settings have no effect yet on the user experience.
- Voice Activation: Allows the wake phrase "Hey NOCH" from within the app.
- Listen On Start: Activates speech to text immediately when the AI overlay is activated.

<img 
  src="/topnoch.github.io/AiSettings.png" 
  alt="AiSettings.png" 
  width="450" 
/>

### Per-user Daily Token Limits
Users have a daily token limit. Once the token limit is reached the AI is no longer usable and gives a response with when the limit will be reset. 

<img 
  src="/topnoch.github.io/TokenLimit.png" 
  alt="TokenLimit.png"
  width="450" 
/>

### Error Handling
User friendly error messages under certain circumstances.
- A temporary toast appears when trying to activate the microphone for speach to text in the AI overlay.
- A toast error apears when adjusting AI settings but it can't connect to the internet.

<img 
  src="/topnoch.github.io/ErrorMessage.png" 
  alt="ErrorMessage.png"
  width="450" 
/>

## Future Goals:
- Add many more behaviors to the AI. Making reservations, leaving reviews, ordering ahead, navigating to restraunts, etc...
- Add text to speech so the AI can audibly reply to prompts. A setting would accompany this to turn it off/on.
- Testing and tuning the AI to work with more restraunts and behaviors, possibly with retrieval augmented generation (RAG). 

--- 