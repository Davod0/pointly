

export default function SessionSetupPage() {
  return (
    <div>
      Retrospective Session Start Page
    </div>
  );
}


{/*
    Database


    retroSessions/
                id/
                    roomName: "string"
                    createdAt: timestamp
                    createdBy: "uid"
                    start: "string"
                    stop: "string"
                    continue: "string"
                    improve: "string"
                    completed: false
                    ________________
                    participants /
                                  id/
                                      userId: "uid" 
                                        name: "string"

                    __________________

                    retroNotes/
                                n1/
                                    categoryName: "string"
                                    text: "string"
                                    userId: "uid"
                                    votes: 3
                                    voters: ["uid", "uid", "uid"]
                                    comments: ["uid", "uid"]





*/}