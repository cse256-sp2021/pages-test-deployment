export declare class IDGenerator {
    static reset(): void;
    static get next(): string;
    static applyID(elem: Element): void;
    /**
     * Recursively adds ids to all elements that are below the given
     * element in the heirarchy.
     *
     * @param elem - the element to start applying ids to its children.
     *                  Will not apply an id to this element.
     */
    static applyRecur(elem: Element | string): void;
    /**
     * Attaches ids to all html elements in the target location in the DOM that do not have ids.
     */
    static attachIdsToAllElements(): void;
    private static idCount;
    private static prefix;
}
//# sourceMappingURL=id_generator.d.ts.map