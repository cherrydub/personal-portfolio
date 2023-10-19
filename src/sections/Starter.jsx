import React from "react";

export default function Starter() {
  return (
    <div className="starter starter-card" id="starter">
      <div className="flex">
        <div className="">
          <img src="cherry-cherries.svg" alt="" width={"50px"} />
        </div>
        <div className="name-container flex-grow text-right">
          <div className="">Chris Wisniewski </div>
          <div style={{ fontSize: "0.8rem" }}>London, UK</div>
        </div>
      </div>
      {/* <img src="cherrydub.svg" alt="" width={"200px"} /> */}
      {/* <div className="flex border-2">
        <span className="border-2 self-end pl-2 font-bold name-container text-right">
          <i className="las la-terminal"></i>
          <span className="name-title border-2">
            Chris Wisniewski, London UK
          </span>
        </span>
      </div> */}
      <div className="starter-info">
        <i className="las la-terminal"></i> Web Developer on a quest to
        kickstart my career in web development. I recently made the exciting
        transition from the IT field, and now I'm eagerly seeking my first role
        as a web developer.
        <br />
        <i class="las la-globe-europe"></i> I'm open to opportunities that offer
        flexibility, whether it's in-office, a hybrid setup, or the chance to
        work remotely across Europe. What drives me is the desire to find a role
        that nurtures continuous learning and allows me to excel as a Software
        Engineer.
        <br />
        <i class="las la-route"></i> My journey into web development has been an
        incredible one. Fresh out of an intensive coding bootcamp, coupled with
        a background in IT and a relentless drive for self-improvement, I'm
        well-prepared to step into the world as a Junior Developer.
        <br />
        <i class="lab la-dev"></i> My development approach is deeply rooted in
        best practices, from collaborative problem-solving through
        pair-programming to meticulous version control. I'm well-versed in
        diverse programming paradigms, a strong advocate of the DRY principle,
        an implementer of SOLID design patterns, and a proficient manager of
        CRUD operations.
        <br />
        <i class="lab la-connectdevelop"></i> My strength lies in adaptability,
        proactiveness, and an unwavering commitment to continuous improvement. I
        thrive in collaborative environments and relish the opportunity to
        contribute to innovative projects.
      </div>
    </div>
  );
}
