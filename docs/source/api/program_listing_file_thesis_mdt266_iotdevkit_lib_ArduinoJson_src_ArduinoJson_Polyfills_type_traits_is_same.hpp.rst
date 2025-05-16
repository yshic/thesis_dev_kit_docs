
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_same.hpp:

Program Listing for File is_same.hpp
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_same.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\is_same.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "integral_constant.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // A meta-function that returns true if types T and U are the same.
   template <typename T, typename U>
   struct is_same : false_type {};
   
   template <typename T>
   struct is_same<T, T> : true_type {};
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
