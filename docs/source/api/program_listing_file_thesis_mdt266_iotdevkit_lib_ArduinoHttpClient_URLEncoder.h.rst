
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoHttpClient_URLEncoder.h:

Program Listing for File URLEncoder.h
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoHttpClient_URLEncoder.h>` (``thesis_mdt266_iotdevkit\lib\ArduinoHttpClient\URLEncoder.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // Library to simplify HTTP fetching on Arduino
   // (c) Copyright Arduino. 2019
   // Released under Apache License, version 2.0
   
   #ifndef URL_ENCODER_H
   #define URL_ENCODER_H
   
   #include <Arduino.h>
   
   class URLEncoderClass
   {
   public:
       URLEncoderClass();
       virtual ~URLEncoderClass();
   
       static String encode(const char* str);
       static String encode(const String& str);
   
   private:
       static String encode(const char* str, int length);
   };
   
   extern URLEncoderClass URLEncoder;
   
   #endif
