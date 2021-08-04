import { assert } from "chai";
import { documentationUrl } from "../../src/util/documentation-url";

describe("Generate documentation URL", function () {
  it("Generate documentation url for stable", function () {
    assert.strictEqual(
      // @ts-ignore
      documentationUrl({ config: { version: "1.0.0" } }, "/blog"),
      "https://www.safegatepro.it/blog"
    );
  });
  it("Generate documentation url for rc", function () {
    assert.strictEqual(
      // @ts-ignore
      documentationUrl({ config: { version: "1.0.0b0" } }, "/blog"),
      "https://rc.safegatepro.it/blog"
    );
  });
});
