
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_button_src_button.h:

Program Listing for File button.h
=================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_button_src_button.h>` (``thesis_mdt266_iotdevkit\lib\button\src\button.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #ifndef BUTTON_H
   #define BUTTON_H
   
   #include "Arduino.h"
   
   // Define error codes for button operations
   typedef enum
   {
     BUTTON_OK                = 0,
     BUTTON_ERR_INVALID_PARAM = 1,
     BUTTON_ERR_UNINITIALIZED = 2,
   } button_handler_error_t;
   
   // Callback function type
   typedef void (*ButtonCallback)(void);
   
   class ButtonHandler
   {
   public:
     ButtonHandler(int pin, bool isActiveLow = true, bool usePullup = true);
   
     button_handler_error_t setDebounceDuration(unsigned int ms);
   
     button_handler_error_t setDoubleClickInterval(unsigned int ms);
   
     button_handler_error_t setHoldDuration(unsigned int ms);
   
     button_handler_error_t attachSingleClickCallback(ButtonCallback callback);
   
     button_handler_error_t attachDoubleClickCallback(ButtonCallback callback);
   
     button_handler_error_t attachHoldStartCallback(ButtonCallback callback);
   
     button_handler_error_t attachHoldReleaseCallback(ButtonCallback callback);
   
     void update();
   
   private:
     int          buttonPin;           // Pin connected to the button.
     bool         activeLow;           // True if button is active low.
     unsigned int debounceDuration;    // Debounce duration in milliseconds.
     unsigned int doubleClickInterval; // Maximum interval for double click.
     unsigned int holdDuration;        // Duration to trigger hold event.
   
     ButtonCallback singleClickCallback; // Single-click callback function.
     ButtonCallback doubleClickCallback; // Double-click callback function.
     ButtonCallback holdStartCallback;   // Hold-start callback function.
     ButtonCallback holdReleaseCallback; // Hold-release callback function.
   
     bool          lastButtonState;  // Last known button state.
     unsigned long lastDebounceTime; // Last time button state changed.
     unsigned long lastClickTime;    // Time of the last button release.
     bool          isHolding;        // True if button is currently held.
     unsigned long holdStartTime;    // Start time of the hold action.
     int           clickCount;       // Count of consecutive clicks.
   
     typedef enum
     {
       STATE_IDLE,
       STATE_BUTTON_DOWN,
       STATE_WAIT_FOR_SECOND_CLICK,
       STATE_HOLDING,
       STATE_HOLD_RELEASE
     } ButtonState;
   
     ButtonState currentState; // Current state of the FSM
   
     // Additional helper variables
     unsigned long stateStartTime; // Time when the state started
   
     inline bool hasElapsed(unsigned long start, unsigned long duration)
     {
       return (millis() - start) >= duration;
     }
   
     // Reset FSM state
     inline void resetFSM()
     {
       currentState   = STATE_IDLE;
       stateStartTime = 0;
       clickCount     = 0;
       isHolding      = false;
     }
   };
   
   #endif // BUTTON_H
