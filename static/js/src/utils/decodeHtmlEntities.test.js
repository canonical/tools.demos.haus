import decodeHtmlEntities from "./decodeHtmlEntities";

describe("decodeHtmlEntities", () => {
  it("decodes HTML entites into unicode characters", () => {
    expect(decodeHtmlEntities("&#33;")).toEqual("!");
    expect(decodeHtmlEntities("&#37;")).toEqual("%");
    expect(decodeHtmlEntities("&#40;")).toEqual("(");
    expect(decodeHtmlEntities("&#60;")).toEqual("<");
    expect(decodeHtmlEntities("&#64;")).toEqual("@");
    expect(decodeHtmlEntities("&#125;")).toEqual("}");
  });
});
