
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_enable_if.hpp:

Program Listing for File enable_if.hpp
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_enable_if.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\enable_if.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // A meta-function that return the type T if Condition is true.
   template <bool Condition, typename T = void>
   struct enable_if {};
   
   template <typename T>
   struct enable_if<true, T> {
     typedef T type;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
