
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_mpl_max.hpp:

Program Listing for File max.hpp
================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_mpl_max.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\mpl\max.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   #include <stddef.h>  // for size_t
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // A meta-function that returns the highest value
   template <size_t X, size_t Y, bool MaxIsX = (X > Y)>
   struct Max {};
   
   template <size_t X, size_t Y>
   struct Max<X, Y, true> {
     static const size_t value = X;
   };
   
   template <size_t X, size_t Y>
   struct Max<X, Y, false> {
     static const size_t value = Y;
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
