import { getEmptyVcfFieldMapping, VcfFieldMapping } from '../utils/vcf'

// ------------- Action Types ------------ //
export const VCF_FIELD_MAPPING_SET = 'VCF_FIELD_MAPPING_SET'

export interface SetVcfFieldMapping {
    type: typeof VCF_FIELD_MAPPING_SET
    payload: Partial<VcfFieldMapping>
}

export type VcfFieldMappingTypes = SetVcfFieldMapping

// ------------ Action Creators ---------- //
export const setVcfFieldMapping = (
    fieldMapping: Partial<VcfFieldMapping>
): VcfFieldMappingTypes => {
    return {
        type: VCF_FIELD_MAPPING_SET,
        payload: fieldMapping,
    }
}

// ----------------- State --------------- //
const initialState: VcfFieldMapping = getEmptyVcfFieldMapping()

// ---------------- Reducer -------------- //
export function vcfFieldMappingReducer(
    state = initialState,
    action: VcfFieldMappingTypes
): VcfFieldMapping {
    switch (action.type) {
        case VCF_FIELD_MAPPING_SET:
            return { ...state, ...action.payload }
        default:
            return state
    }
}
