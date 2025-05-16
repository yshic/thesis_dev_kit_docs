
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_remove_cv.hpp:

Program Listing for File remove_cv.hpp
======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_remove_cv.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\remove_cv.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename T>
   struct remove_cv {
     typedef T type;
   };
   template <typename T>
   struct remove_cv<const T> {
     typedef T type;
   };
   template <typename T>
   struct remove_cv<volatile T> {
     typedef T type;
   };
   template <typename T>
   struct remove_cv<const volatile T> {
     typedef T type;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
