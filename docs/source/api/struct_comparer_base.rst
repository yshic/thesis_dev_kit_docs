.. _exhale_struct_struct_comparer_base:

Struct ComparerBase
===================

- Defined in :ref:`file_thesis_mdt266_iotdevkit_lib_ArduinoJson_src_ArduinoJson_Variant_VariantCompare.hpp`


Inheritance Relationships
-------------------------

Base Type
*********

- ``public Visitor< CompareResult >`` (:ref:`exhale_struct_struct_visitor`)


Derived Types
*************

- ``public ArrayComparer`` (:ref:`exhale_struct_struct_array_comparer`)
- ``public Comparer< T, typename enable_if< IsString< T >::value >::type >`` (:ref:`exhale_struct_struct_comparer_3_01_t_00_01typename_01enable__if_3_01_is_string_3_01_t_01_4_1_1value_01_4_1_1type_01_4`)
- ``public Comparer< T, typename enable_if< is_integral< T >::value||is_floating_point< T >::value >::type >`` (:ref:`exhale_struct_struct_comparer_3_01_t_00_01typename_01enable__if_3_01is__integral_3_01_t_01_4_1_1value_7_7is__fbf360b598ee54f58b5df8def74d193f5`)
- ``public NullComparer`` (:ref:`exhale_struct_struct_null_comparer`)
- ``public ObjectComparer`` (:ref:`exhale_struct_struct_object_comparer`)
- ``public RawComparer`` (:ref:`exhale_struct_struct_raw_comparer`)
- ``public VariantComparer`` (:ref:`exhale_struct_struct_variant_comparer`)


Struct Documentation
--------------------


.. doxygenstruct:: ComparerBase
   :project: thesis_dev_kit_docs
   :members:
   :protected-members:
   :undoc-members: