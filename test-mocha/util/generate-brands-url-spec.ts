import { assert } from "chai";
import { brandsUrl } from "../../src/util/brands-url";

describe("Generate brands Url", function () {
  it("Generate logo brands url for cloud component without fallback", function () {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl("cloud", "logo"),
      "https://brands.safegatepro.it/cloud/logo.png"
    );
  });
  it("Generate icon brands url for cloud component without fallback", function () {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl("cloud", "icon"),
      "https://brands.safegatepro.it/cloud/icon.png"
    );
  });
  it("Generate logo brands url for cloud component with fallback", function () {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl("cloud", "logo", true),
      "https://brands.safegatepro.it/_/cloud/logo.png"
    );
  });
  it("Generate icon brands url for cloud component with fallback", function () {
    assert.strictEqual(
      // @ts-ignore
      brandsUrl("cloud", "icon", true),
      "https://brands.safegatepro.it/_/cloud/icon.png"
    );
  });
});
