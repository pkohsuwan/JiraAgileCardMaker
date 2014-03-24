//var Card = function (issueId, issueUrl, issueType, estimate, summary, component, tag, businessValue, epic, parentIssueId, subtasks) {
//	if (issueId == null) throw new Error("An Issue must have an id.");
//
//	this.issueId = issueId;
//	this.issueUrl = issueUrl;
//	this.issueType = issueType;
//	this.estimate = estimate;
//	this.summary = summary;
//	this.component = component;
//	this.tag = tag;
//	this.businessValue = businessValue;
//    this.epic = epic;
//	this.parentIssueId = parentIssueId;
//    this.subtasks = subtasks;
//};
//



var Card = function (issueId, issueUrl, issueType, estimate, summary, assignee, component, tag, epic, parentIssueId, subtasks) {
	if (issueId == null) throw new Error("An Issue must have an id.");

	this.issueId = issueId;
	this.issueUrl = issueUrl;
	this.issueType = issueType;
	this.estimate = estimate;
	this.summary = summary;
	this.assignee = assignee;
	this.component = component;
	
	var love = tag.split("T")
	this.tag= love[0];
    this.epic = epic;
	this.parentIssueId = parentIssueId;
    this.subtasks = subtasks;
};
