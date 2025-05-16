
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Variant_Converter.hpp:

Program Listing for File Converter.hpp
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Variant_Converter.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Variant\Converter.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PUBLIC_NAMESPACE
   
   template <typename T, typename Enable = void>
   struct Converter;
   
   ARDUINOJSON_END_PUBLIC_NAMESPACE
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // clang-format off
   template <typename T1, typename T2>
   class InvalidConversion;  // Error here? See https://arduinojson.org/v6/invalid-conversion/
   // clang-format on
   
   template <typename T>
   struct ConverterNeedsWriteableRef;
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
