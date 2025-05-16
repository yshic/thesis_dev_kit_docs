
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_enum.hpp:

Program Listing for File is_enum.hpp
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_enum.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\is_enum.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "is_class.hpp"
   #include "is_convertible.hpp"
   #include "is_floating_point.hpp"
   #include "is_integral.hpp"
   #include "is_same.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <typename T>
   struct is_enum {
     static const bool value = is_convertible<T, int>::value &&
                               !is_class<T>::value && !is_integral<T>::value &&
                               !is_floating_point<T>::value;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
