
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_base_of.hpp:

Program Listing for File is_base_of.hpp
=======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Polyfills_type_traits_is_base_of.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Polyfills\type_traits\is_base_of.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Namespace.hpp>
   
   #include "remove_reference.hpp"
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   // A meta-function that returns true if Derived inherits from TBase is an
   // integral type.
   template <typename TBase, typename TDerived>
   class is_base_of {
    protected:  // <- to avoid GCC's "all member functions in class are private"
     static int probe(const TBase*);
     static char probe(...);
   
    public:
     static const bool value =
         sizeof(probe(reinterpret_cast<typename remove_reference<TDerived>::type*>(
             0))) == sizeof(int);
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
