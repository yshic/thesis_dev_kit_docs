
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_utility.hpp:

Program Listing for File utility.hpp
====================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_utility.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\utility.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include "type_traits.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   template <class T>
   T&& forward(typename remove_reference<T>::type& t) noexcept {
     return static_cast<T&&>(t);
   }
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
