
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_IsString.hpp:

Program Listing for File IsString.hpp
=====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_IsString.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Strings\IsString.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Polyfills/type_traits.hpp>
   #include <ArduinoJson/Strings/StringAdapter.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename T, typename Enable = void>
   struct IsString : false_type {};
   
   template <typename T>
   struct IsString<
       T, typename make_void<typename StringAdapter<T>::AdaptedString>::type>
       : true_type {};
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
