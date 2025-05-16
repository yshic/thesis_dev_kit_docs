
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_LCD_I2C_src_LCD_Constants.h:

Program Listing for File LCD_Constants.h
========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_LCD_I2C_src_LCD_Constants.h>` (``thesis_mdt266_iotdevkit\lib\LCD_I2C\src\LCD_Constants.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   
   #ifndef _LCD_CONSTANTS_H_
   #define _LCD_CONSTANTS_H_
   
   // Clear Display
   constexpr int HD44780_CLEAR_DISPLAY{0b00000001};
   
   // Return Home 1.52 ms
   constexpr uint8_t HD44780_CURSOR_HOME{0b00000010};
   
   // Entry Mode Set 37 µs
   constexpr uint8_t HD44780_ENTRY_MODE_SET{0b00000100};
   constexpr uint8_t HD44780_ACCOMPANIES_DISPLAY_SHIFT{0b00000001};
   constexpr uint8_t HD44780_ENTRY_SHIFTINCREMENT{0b00000010};
   // constexpr uint8_t HD44780_ENTRY_SHIFTDECREMENT    {0b00000000};
   
   // Display ON/OFF control 37 µs
   constexpr uint8_t HD44780_DISPLAY_CONTROL{0b00001000};
   constexpr uint8_t HD44780_BLINK_ON{0b00000001};
   constexpr uint8_t HD44780_CURSOR_ON{0b00000010};
   constexpr uint8_t HD44780_DISPLAY_ON{0b00000100};
   
   // Cursor or Display Shift 37 µs
   constexpr uint8_t HD44780_CURSOR_OR_DISPLAY_SHIFT{0b00010000};
   constexpr uint8_t HD44780_SHIFT_RIGHT{0b00000100};
   // constexpr uint8_t HD44780_SHIFT_LEFT              {0b00000000};
   constexpr uint8_t HD44780_DISPLAY_SHIFT{0b00001000};
   // constexpr uint8_t HD44780_CURSOR_MOVE             {0b00000000};
   
   // Function Set 37 µs
   constexpr uint8_t HD44780_FUNCTION_SET{0b00100000};
   constexpr uint8_t HD44780_5x10_DOTS{0b00000100};
   constexpr uint8_t HD44780_5x8_DOTS{0b00000000};
   constexpr uint8_t HD44780_2_LINE{0b00001000};
   constexpr uint8_t HD44780_1_LINE{0b00000000};
   constexpr uint8_t HD44780_8_BIT_MODE{0b00010000};
   constexpr uint8_t HD44780_4_BIT_MODE{0b00000000};
   
   constexpr int HD44780_SET_CGRAM_ADDR{0b01000000};
   constexpr int HD44780_SET_DDRRAM_ADDR{0b10000000};
   
   
   #endif
