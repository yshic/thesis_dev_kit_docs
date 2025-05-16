
.. _program_listing_file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Variant_SlotFunctions.hpp:

Program Listing for File SlotFunctions.hpp
==========================================

|exhale_lsh| :ref:`Return to documentation for file <file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Variant_SlotFunctions.hpp>` (``thesis_mdt266_iotdevkit\lib\ArduinoJson\src\ArduinoJson\Variant\SlotFunctions.hpp``)

.. |exhale_lsh| unicode:: U+021B0 .. UPWARDS ARROW WITH TIP LEFTWARDS

.. code-block:: cpp

   // ArduinoJson - https://arduinojson.org
   // Copyright © 2014-2023, Benoit BLANCHON
   // MIT License
   
   #pragma once
   
   #include <ArduinoJson/Polyfills/assert.hpp>
   #include <ArduinoJson/Variant/VariantData.hpp>
   
   ARDUINOJSON_BEGIN_PRIVATE_NAMESPACE
   
   struct SlotKeySetter {
     SlotKeySetter(VariantSlot* instance) : instance_(instance) {}
   
     template <typename TStoredString>
     void operator()(TStoredString s) {
       if (!s)
         return;
       ARDUINOJSON_ASSERT(instance_ != 0);
       instance_->setKey(s);
     }
   
     VariantSlot* instance_;
   };
   
   template <typename TAdaptedString>
   inline bool slotSetKey(VariantSlot* var, TAdaptedString key, MemoryPool* pool) {
     if (!var)
       return false;
     return storeString(pool, key, SlotKeySetter(var));
   }
   
   inline size_t slotSize(const VariantSlot* var) {
     size_t n = 0;
     while (var) {
       n++;
       var = var->next();
     }
     return n;
   }
   
   inline VariantData* slotData(VariantSlot* slot) {
     return reinterpret_cast<VariantData*>(slot);
   }
   ARDUINOJSON_END_PRIVATE_NAMESPACE
