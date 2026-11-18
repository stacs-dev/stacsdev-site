export function Obituaries() {
  return (
    <>
      <h1>Obituaries</h1>
      <p className="lede">
        Honouring STACSDEV members of bygone years.<br /> Memoria eorum nos in perpetuum firmemus.
      </p>

      <hr />

      {/* One <article class="obituary"> per departed member. "fl." = floruit, "flourished". */}
      <article className="obituary">
        <h2>Arnav Bista</h2>
        <p className="dates">fl. 2024–2026</p>
        <p>
          Our founding president. What a tour du force his years were... it brings me a deluge of tears and reveals a hole
          in my heart where he resided.
        </p>
      </article>

      <article className="obituary">
        <h2>Elliott Hipkiss</h2>
        <p className="dates">fl. 2025–2026</p>
        <p>
          The best security researcher to come out of STACSDEV in all our storied years. Isn't it ironic that I am now
          less secure in his absence?
        </p>
      </article>
    </>
  );
}
