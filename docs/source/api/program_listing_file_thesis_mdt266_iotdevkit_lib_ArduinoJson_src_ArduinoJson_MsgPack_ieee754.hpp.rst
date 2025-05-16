
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_MsgPack_ieee754.hpp:

Program Listing for File ieee754.hpp
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_MsgPack_ieee754.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\MsgPack\ieee754.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   inline void doubleToFloat(const uint8_t d[8], uint8_t f[4]) {
     f[0] = uint8_t((d[0] & 0xC0) | (d[0] << 3 & 0x3f) | (d[1] >> 5));
     f[1] = uint8_t((d[1] << 3) | (d[2] >> 5));
     f[2] = uint8_t((d[2] << 3) | (d[3] >> 5));
     f[3] = uint8_t((d[3] << 3) | (d[4] >> 5));
   }
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
