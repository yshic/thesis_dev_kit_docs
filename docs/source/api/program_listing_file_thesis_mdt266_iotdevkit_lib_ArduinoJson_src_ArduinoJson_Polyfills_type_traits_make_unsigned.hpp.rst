
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_make_unsigned.hpp:

Program Listing for File make_unsigned.hpp
==========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_make_unsigned.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\make_unsigned.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "type_identity.hpp"
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename T>
   struct make_unsigned;
   
   template <>
   struct make_unsigned<char> : type_identity<unsigned char> {};
   
   template <>
   struct make_unsigned<signed char> : type_identity<unsigned char> {};
   template <>
   struct make_unsigned<unsigned char> : type_identity<unsigned char> {};
   
   template <>
   struct make_unsigned<signed short> : type_identity<unsigned short> {};
   template <>
   struct make_unsigned<unsigned short> : type_identity<unsigned short> {};
   
   template <>
   struct make_unsigned<signed int> : type_identity<unsigned int> {};
   template <>
   struct make_unsigned<unsigned int> : type_identity<unsigned int> {};
   
   template <>
   struct make_unsigned<signed long> : type_identity<unsigned long> {};
   template <>
   struct make_unsigned<unsigned long> : type_identity<unsigned long> {};
   
   template <>
   struct make_unsigned<signed long long> : type_identity<unsigned long long> {};
   template <>
   struct make_unsigned<unsigned long long> : type_identity<unsigned long long> {};
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
