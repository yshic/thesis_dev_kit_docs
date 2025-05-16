
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_Adapters_JsonString.hpp:

Program Listing for File JsonString.hpp
=======================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Strings_Adapters_JsonString.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Strings\Adapters\JsonString.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Strings/Adapters/RamString.hpp>
   #include <ArduinoJson/Strings/JsonString.hpp>
   #include <ArduinoJson/Strings/StringAdapter.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   class JsonStringAdapter : public SizedRamString {
    public:
     JsonStringAdapter(const JsonString& s)
         : SizedRamString(s.c_str(), s.size()), linked_(s.isLinked()) {}
   
     StringStoragePolicy::LinkOrCopy storagePolicy() const {
       StringStoragePolicy::LinkOrCopy policy = {linked_};
       return policy;
     }
   
    private:
     bool linked_;
   };
   
   template <>
   struct StringAdapter<JsonString> {
     typedef JsonStringAdapter AdaptedString;
   
     static AdaptedString adapt(const JsonString& s) {
       return AdaptedString(s);
     }
   };
   
   ARDUINOJSON_END_PRIVATE_NAMESPACE
