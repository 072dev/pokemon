export class PokemonDTO {
    base_experience?: number;
    is_default?: boolean;
    location_area_encounters?: string;
    order?: number;
    weight?: number;
    id?: number;
    name?: string;
    height?: number;
    types?: Types[];
    stats?: Stats[];
    sprites?: Sprites[];
    species?: Species[];
    past_types?: [];
    moves?: Moves[];
    forms?: Forms[];
}

export class Abilities {
    ability?: Ability[];
    is_hidden?: boolean;
    slot?: number;
}

export class Ability {
    name?: string;
    url?: string;
}

export class Forms {
    name?: string;
    url?: string;
}

export class GameIncides {
    game_index?: number;
    version?: Version[];
}

export class Version {
    name?: string;
    url?: string;
}

export class Types {
    slot?: number;
    type?: Type;
}

export class Type {
    name?: string;
    url?: string;
}

export class Moves {
    move?: Move[];
    version_group_details?: VersionGroupDetails[];
}

export class VersionGroupDetails {
    level_learned_at?: number;
    move_learn_method?: MoveLearnMethod[];
    version_group?: VersionGroup[];
}

export class MoveLearnMethod {
    name?: string;
    url?: string;
}

export class VersionGroup {
    name?: string;
    url?: string;
}

export class Move {
    name?: string;
    url?: string;
}

export class Species {
    name?: string;
    url?: string;
}

export class Sprites {
    back_default?: string;
    back_female?: string;
    back_shiny?: string;
    back_shiny_female?: string;
    front_default?: string;
    front_female?: string;
    front_shiny?: string;
    front_shiny_female?: string;
}

export class Stats {
    base_stat?: number;
    effort?: number;
}

export class Stat {
    name?: string;
    url?: string;
}

//------------------------

export class Pokemon {
    id?: number;
    name?: string;
    team?: number;
    type?: string[];
    hp?: number;
    dmgrelat?: DamageRelations;
}

export class PokemonType {
    name?: string;
}

//----------

export class DamageRelations {
    double_damage_from?: DoubleDamageFrom[]
    double_damage_to?: DoubleDamageTo[];
    half_damage_from?: HalfDamageFrom[];
    half_damage_to?: HalfDamageTo[];
    no_damage_from?: NoDamageFrom[];
    no_damage_to?: NoDamageTo[];
}

export class DoubleDamageFrom {
    name?: string;
    url?: string;
}

export class DoubleDamageTo {
    name?: string;
    url?: string;
}

export class HalfDamageFrom {
    name?: string;
    url?: string;
}

export class HalfDamageTo {
    name?: string;
    url?: string;
}

export class NoDamageFrom {
    name?: string;
    url?: string;
}

export class NoDamageTo {
    name?: string;
    url?: string;
}

export class AttackType {
    name?: string;
    damage?: number;
}