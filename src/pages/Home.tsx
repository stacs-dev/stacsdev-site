export function Home() {
  return (
    <>
      <div className="title-block">
        <h1>STACSDEV</h1>
        <p className="lede">St. Andrews Computing Society Developers Subcommittee</p>
      </div>

      <section className="abstract">
        <h2>Abstract</h2>
        <p>
          The STACS Developers subcommittee is an arm of STACS which manages our annual Capture-the-Flag (CTF) event,
          coordinates STACS development projects,
          and runs events related to each of our members individual interests.<sup><a href="#fn1" id="ref1">1</a></sup>
        </p>
      </section>

      <section className="numbered">
        <h2>Code Olympics</h2>
        <p>
          Take a shot at one of our monthly coding challenges! We've got problems at different levels of difficult, but
          regardless we're looking for compact, highly-optimised solutions.
          See if you can top the leaderboard and beat your friends!
        </p>

        <h2>STACSDEV Puzzles</h2>
        <p>
          Have fun playing our daily computer science themed puzzle games! Designed by our resident specialist puzzician.
        </p>

        <h2>Meet the team</h2>
        <p>
          <li>
            Jake Brockwell - our illustrious, foolhardy, and delusional president.
          </li>
          <li>
            Saurish Ghosh - Churchill's worst nightmare.
          </li>
          <li>
            Emily Smith - Certified puzzlemaster.
          </li>
          <li>
            Sneha Vasudev - Artificially intelligent.
          </li>
          <li>
            Tom Harper - Rustacean progenitor.
          </li>
          <li>
            Shikhar Srivastava - PLDI demon.
          </li>
        </p>
      </section>

      <aside className="footnotes">
        <ol>
          <li id="fn1">
            We're also running this website! But that's more to host our own fun projects.{" "}
            <a href="#ref1" aria-label="Back to text">↩</a>
          </li>
        </ol>
      </aside>
    </>
  );
}
