import members from '../../data/members'
import './Members.css'

function Members() {
    return (
        <main className="members-page">
            {/* HEADER */}
            <div className="members-page___header">
                <span className="section-label">The Seven</span>
                <h1 className="members-page__title">Meet the Members</h1>
                <p className="members-page__subtitle">Seven Individuals. One Universe</p>

            </div>
            {/* GRID */}
            <div className="members-grid">
                {members.map((member) => (
          <div
            key={member.id}
            className="member-card"
            style={{ '--member-color': member.color }}
          >
            <div className="member-card__header">
              <span className="member-card__number">
                0{member.id}
              </span>
              <span className="member-card__role">
                {member.role}
              </span>
            </div>

            <h2 className="member-card__name">
              {member.stageName}
            </h2>

            <p className="member-card__realname">
              {member.realName}
            </p>

            <p className="member-card__born">
              Born {member.born}
            </p>

            <p className="member-card__description">
              {member.description}
            </p>

          </div>
        ))}
            </div>
        </main>
    )
}

export default Members