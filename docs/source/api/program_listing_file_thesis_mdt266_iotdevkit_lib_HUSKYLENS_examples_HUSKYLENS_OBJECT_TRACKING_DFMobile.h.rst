
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_HUSKYLENS_examples_HUSKYLENS_OBJECT_TRACKING_DFMobile.h:

Program Listing for File DFMobile.h
===================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_HUSKYLENS_examples_HUSKYLENS_OBJECT_TRACKING_DFMobile.h>` (``thesis_mdt266_iotdevkit\lib\HUSKYLENS\examples\HUSKYLENS_OBJECT_TRACKING\DFMobile.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   /**************************************************************************/
   
   #include <Arduino.h>
   
   class DFMobile {
   private:
     bool _left_advance;// = LOW;
     bool _left_back;// = HIGH;
     bool _right_advance;// = HIGH;
     bool _right_back;// = LOW;
   
     uint8_t _left_en;// = 4;
     uint8_t _left_pwm;// = 5;
     uint8_t _right_en;// = 7;
     uint8_t _right_pwm;// = 6;
   
   public:
     DFMobile (uint8_t left_en, uint8_t left_pwm, uint8_t right_en, uint8_t right_pwm);
   
     void Direction (bool left, bool right);
   
     void Speed (int16_t left, int16_t right);
   };
   
   
