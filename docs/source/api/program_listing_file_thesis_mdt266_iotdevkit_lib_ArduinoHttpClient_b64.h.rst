
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoHttpClient_b64.h:

Program Listing for File b64.h
==============================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoHttpClient_b64.h>` (``thesis_mdt266_iotdevkit\lib\ArduinoHttpClient\b64.h``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   #ifndef b64_h
   #define b64_h
   
   int b64_encode(const unsigned char* aInput, int aInputLen, unsigned char* aOutput, int aOutputLen);
   
   #endif
